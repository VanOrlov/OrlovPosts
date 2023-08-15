<template>
    <div class="userPage">
        <my-aside></my-aside>
        <div class="page">
            <div class="page__container">
                <div class="user__name">
                    <h1 class="name">Номер ID: <strong>{{ this.id }}</strong></h1>
                    <h1 class="name">Имя пользователя: <strong>{{ this.name }}</strong></h1>
                    <h1 class="name">Фамилия пользователя: <strong>{{ this.surname }}</strong></h1>
                    <h1 class="name">Логин: <strong>{{ this.login }}</strong></h1>
                    <h1 class="name">Дата регистрации: <strong>{{ this.date_reg }}</strong></h1>
                    <h1 class="name">Кол-во постов: <strong>{{ this.quantity_posts }}</strong></h1>
                </div>
                <n-button round @click="reloadPage" style="margin-top: auto; position: absolute; bottom: 0;" type="error" size="large">Выйти</n-button>
            </div>
        </div>
    </div>
</template>

<script>
import MyAside from '@/components/MyAside.vue'
import axios from 'axios';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
    export default {
        components:{
            MyAside
        },
        data(){
            return{
                id: null,
                name: '',
                surname: '',
                login: '',
                date_reg: null,
                quantity_posts: null,
                isComponentDestroyed: false
            }
        },
        created(){
            const store = useStore()
            const router = useRouter();
            if (!store.state.isAuth) {
                router.push('/login')
            }
        },
        mounted(){
            this.func()
        },
        methods:{
            async func(){
                try {
                    this.userLogin = localStorage.getItem('userLogin')

                    const response = await axios.get(`http://192.168.1.2:3000/api/usersLogin/${this.userLogin}`)
                    this.id = response.data.id
                    this.name = response.data.name
                    this.surname = response.data.surname
                    this.login = response.data.login
                    this.date_reg = new Date(Number(response.data.date_reg))

                    if (this.userLogin) {
                        const resp = await axios.get(`http://192.168.1.2:3000/api/postsUser/${this.id}`)
                        this.quantity_posts = resp.data.length
                    }
                } catch (error) {
                    alert(error)
                }
            },
            reloadPage() {
                localStorage.setItem('isAuth', false)
                localStorage.setItem('userLogin', '')
                location.reload()
            },
        },
    }
</script>

<style scoped>
.userPage{
    display: flex;
    width: 100%;
    min-height: 100vh;
}
.page{
    display: flex;
    width: 100%;
    justify-content: center;
    min-height: 100vh;
    padding: 20px 100px;
}
.page__container{
    display: flex;
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
}
.user__name{
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 50px;
    font-size: 40px;
}

.name{
    color: teal;
}
strong{
    color: white;
}
strong:hover{
    text-decoration: underline;
}
@media (max-width: 425px) {
    .page{
        padding: 20px 60px;
    }
    .user__name{
        gap: 30px;
        font-size: 28px;
    }
}
</style>