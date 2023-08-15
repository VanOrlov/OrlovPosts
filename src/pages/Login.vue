<template>
    <div class="login">
        <div class="login__container">
            <div class="title">
                <img class="title__img" src="../assets/logo.png" alt="">
                <h1 class="title__text">Вход в аккаунт</h1>
            </div>
            <form @submit.prevent class="container__form">
                <my-input v-model="this.form.login" class="input" type="text" round placeholder="Логин"/>
                <my-input v-model="this.form.password" class="input" type="password" round placeholder="Пароль"/>
                <n-button @click="fetchUsers" :disabled="isDisabled" size="large" type="info">Войти</n-button>
            </form>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import axios from 'axios';
import { mapState } from 'vuex'
import router from '@/router';
    export default {
        data(){
            return{
                form:{
                    login: '',
                    password: ''
                },
                isDisabled: true
            }
        },
        computed: {
            ...mapState(['count'])
        },
        methods:{
            async fetchUsers(){
                try {
                    const response = await axios.get('http://192.168.1.2:3000/api/users')
                    let users = response.data
                    if (users.find(obj => obj.login == this.form.login && obj.password == this.form.password)){

                        const response = await axios.get(`http://192.168.1.2:3000/api/usersLogin/${this.form.login}`)
                        const login = response.data.login
                        localStorage.setItem('userLogin', login);

                        this.$store.commit('setIsAuth', true)
                        router.push('/posts')
                    }else{
                        alert('Не правильный логин или пароль')
                    }
                    
                } catch (error) {
                    console.log(error);
                }
            }
        },
        created(){
            const store = useStore()
            const router = useRouter();
            if (store.state.isAuth) {
                router.push('/posts')
            }
        },
        watch:{
            form:{
                deep: true,
                handler(){
                    if (this.form.login && this.form.password) {
                        this.isDisabled = false
                    }
                    else{
                        this.isDisabled = true
                    }
                }
            }
        }
    }
</script>

<style scoped>
.login{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.login__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 768px;
    height: auto;
    border-radius: 15px;
    background-color: var(--color-haiti);
    padding: 100px 50px;
}
.title{
    display: flex;
    align-items: center;
    margin-bottom: 150px;
}

.title__img{
    width: 50px;
    margin-right: 20px;
}
.title__text{
    font-size: 48px;
}
.container__form{
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    gap: 50px;
}
.input{
    width: 100%;
    height: 50px;
    padding: 0 25px;
    border-color: var(--color-haiti);
    border-radius: 25px;
    font-size: 24px;
    background-color: var(--color-haiti);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);
    color: white;
}
.input:focus{
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, .3);
}

@media (max-width: 1000px) {
        .login__container{
            max-width: 768px;
        }
}

@media (max-width: 768px) {
    .login__container{
        padding: 50px;
    }
    .title{
        margin-bottom: 50px;
    }
}

@media (max-width: 426px) {
    .login__container{
        padding: 25px;
        margin-top: -100px;
    }

    .title__text{
        font-size: 24px;
    }
}
</style>