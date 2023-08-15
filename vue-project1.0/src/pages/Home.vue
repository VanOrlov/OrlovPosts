<template>
    <div class="home">
        <div class="home__container">
            <div class="container__logo">
                <img class="logo" src="../assets/logo.png" alt="">
                <h1 class="logo__title">Добро пожаловать на проект Ивана Орлова</h1>
            </div>
            <div class="container__form">
                <n-button class="btn" size="large" type="info" @click="$router.push('/login')">Вход</n-button>
                <n-button class="btn" size="large" type="info" @click="$router.push('/registration')">Регистрация</n-button>
            </div>
        </div>
    </div>
</template>

<script>
import { NButton } from 'naive-ui'
    export default {
        components:{
            NButton
        }
    }
</script>

<style scoped>
    .home{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .home__container{
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: auto;
        height: auto;
        border-radius: 15px;
        padding: 50px;
        background: var(--color-haiti);
    }
    .container__logo{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 85%;
        padding: 15px;
        margin-bottom: 100px;
    }
    .logo{
        padding-bottom: 100px;
        pointer-events: none;
    }
    .logo__title{
        font-size: 30px;
        text-align: center;
    }
    .container__form{
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .btn{
        width: 200px;
    }

    @media (max-width: 1000px) {
        .home__container{
            width: 768px;
        }
    }

    @media (max-width: 768px) {
        .logo{
            padding-bottom: 30px;
        }
        .home__container{
            max-width: 768px;
            padding: 25px;
        }
        .container__logo{
            margin-bottom: 50px;
        }
        .btn{
        width: auto
        }
    }
    @media (max-width: 426px) {
        .home__container{
            margin-top: -100px;
        }
    }
</style>