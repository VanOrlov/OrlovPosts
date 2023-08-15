<template>
    <aside>
        <div class="aside-main">
            <div class="project-title">
                <img @click="$router.push(`/posts`)" class="title-img" src="../images/favicon.png" alt="НЕТУ">
                <h1 @click="$router.push(`/posts`)" class="title-text">Vue v3.0 Project</h1>
                <div @click="toggle" class="burger">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </div> 
            <div @click="$router.push(`/users/${this.id}`)" class="user-card">
                <img class="user-ava" src="../images/ava.png" alt="">
                <n-ellipsis>
                    <h1 class="title-text">{{ name }}</h1>
                    <h1 class="title-text">{{ surname }}</h1>
                </n-ellipsis>
                <img class="right" style="width: 30px; margin-left: auto;" src="../images/right.png" alt="">
            </div>
        </div>
    </aside>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'my-aside',
        data(){
            return{
                userLogin:'',
                name:'',
                surname:'',
                id: 0
            }
        },
        methods:{
            async login(){
                this.userLogin = localStorage.getItem('userLogin')

                const response = await axios.get(`http://192.168.1.2:3000/api/usersLogin/${this.userLogin}`)
                this.name = response.data.name
                this.surname = response.data.surname
                this.id = response.data.id
            },
            toggle(){
                let burger = document.querySelector('.burger')
                let aside = document.querySelector('aside')
                aside.classList.toggle('asideActive')
                burger.classList.toggle('active')
            }
        },
        mounted(){
            this.login()
        }
    }
</script>

<style scoped>
aside{
    display: flex;
    position: relative;
    height: 100%;
    width: 400px;
    padding: 20px;
    margin-right: -400px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: var(--color-blackPerl);
    transition: transform .2s ease-in-out;
    transform: translateX(-80%);
    box-shadow: 1px 0 10px 1px rgba(255, 255, 255, .1);
    z-index: 999;
}

.asideActive{
    transform: translateX(0%);
}

.aside-main{
    position: relative;
    width: 100%;
    min-height: 100%;
}
.project-title{
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
}
.project-title:hover{
    cursor: pointer;
}
.title-text{
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
    color: white;
}


/* БУРГЕР */
.burger{
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-left: auto;
}
.bar {
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: teal;
  transition: transform .2s;
}
.burger.active .bar:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.burger.active .bar:nth-child(2) {
  opacity: 0;
}

.burger.active .bar:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}
/* БУРГЕР */


.user-card{
    display: flex;
    height: 100px;
    align-items: center;
    margin-top: 15px;
    border-radius: 15px;
    padding: 15px;
    transition: .2s
}
.right{
    opacity: 0;
    transition: .2s
}

.user-card:hover{
    background-color: var(--color-haiti);
    cursor: pointer;
    .right{
        opacity: 1;
    }
}
.user-ava{
    margin-right: 10px;
    width: 70px;
    border-radius: 50%;
}

@media (max-width: 1024px) {
    aside{
        transform: translateX(-85%);
    }
}
@media (max-width: 425px) {
    aside{
        width: 320px;
        margin-right: -320px;
    }
    .burger{
        margin-right: -5px;
        width: 25px;
    }
}
</style>