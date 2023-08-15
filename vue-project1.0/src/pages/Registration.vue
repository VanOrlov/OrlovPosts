<template>
    <div class="reg">
        <div class="reg__container">
            <div class="title">
                <img class="title__img" src="../assets/logo.png" alt="">
                <h1 class="title__text">Регистрация аккаунта</h1>
            </div>
            <div class="container__form">
                <my-input v-model="this.user.name" class="input" type="text" round placeholder="Имя"/>
                <my-input v-model="this.user.surname" class="input" type="text" round placeholder="Фамилия"/>
                <my-input v-model="this.user.login" class="input" type="text" round placeholder="Логин"/>
                <my-input v-model="this.user.password" class="input" type="password" round placeholder="Пароль"/>
                <my-input v-model="this.password2" class="input" type="password" round placeholder="Повтроите пароль"/>
                <n-button @click="postUsers" :disabled="isDisabled" size="large" type="info">Войти</n-button>
            </div>
            <div>{{ res }}</div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import axios from 'axios';
import { mapState } from 'vuex';
import router from '@/router';
    export default {
        data(){
            return{
                user:{
                    name: '',
                    surname: '',
                    login: '',
                    password: '',
                },
                password2: '',
                isDisabled: true,
                res: ''
            }
        },
        computed: {
            ...mapState(['count'])
        },
        methods:{
            async postUsers(){
                try {
                    const response = await axios.get('http://192.168.1.2:3000/api/usersLogin')
                    let arrLogins = []
                    response.data.forEach(el => {
                        arrLogins.push(el.login)
                    })
                    if (!arrLogins.includes(this.user.login)) {
                        const response = await axios.post('http://192.168.1.2:3000/api/users', {
                            name: this.user.name,
                            surname: this.user.surname,
                            login: this.user.login,
                            password: this.user.password,
                            date_reg: Date.now(),
                            admin: false
                        })
                        this.$store.commit('setIsAuth', true)
                        router.push('/posts')
                    } else {
                        alert('Пользователь с таким логином уже есть')
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        },
        created(){
            const store = useStore()
            if (store.state.isAuth) {
                router.push('/posts')
            }
        },
        watch:{
            user:{
                deep: true,
                handler(){
                    this.password2 = ''
                }
            },
            password2(){
                if (this.user.name && this.user.surname && this.user.login && this.user.password && this.user.password === this.password2) {
                        this.isDisabled = false
                    }
                else{
                    this.isDisabled = true
                }
            }
        }
    }
</script>

<style scoped>

.reg{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.reg__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 768px;
    height: auto;
    border-radius: 15px;
    background-color: var(--color-haiti);
    padding: 50px 50px;
}
.title{
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.title__img{
    width: 50px;
    margin-right: 20px;
}
.title__text{
    font-size: 30px;
}
.container__form{
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    gap: 30px;
}

@media (max-width: 1000px) {
        .reg__container{
            width: 768px;
        }
}


@media (max-width: 426px) {
    .reg__container{
        padding: 25px;
        margin-top: -100px;
    }

    .title__text{
        font-size: 24px;
    }
}
</style>