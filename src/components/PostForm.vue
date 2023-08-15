<template>
    <form @submit.prevent>
        <h1>Создание поста</h1>
        <my-input class="input" v-model="this.post.title" placeholder="Название поста"/>
        <my-area  class="input" v-model="this.post.content" placeholder="Содержание поста"/>
        <n-button @click="createPost" style="font-size: 20px; border-radius: 10px; height: 50px;" type="info">
            Опубликовать
        </n-button>
    </form>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                post:{
                    title: '',
                    content: ''
                },
                isDisabled: true,
                show: false,
                id: null
            }
        },
        methods:{
            async userId(){
                this.userLogin = localStorage.getItem('userLogin')
                const response = await axios.get(`http://192.168.1.2:3000/api/usersLogin/${this.userLogin}`)
                this.id = response.data.id
            },

            async createPost(){
                try {
                    const response = await axios.post('http://192.168.1.2:3000/api/posts', {
                        title: this.post.title,
                        content: this.post.content,
                        user_id: this.id
                    })

                    this.$emit('hide');
                } catch (error) {
                    console.log(error);
                }
            }
        },
        
        mounted(){
            this.userId()
        }
    }
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
h1{
    font-size: 26px;
}

@media (max-width: 768px) {
    
}
@media (max-width: 450px) {
    form{
        gap: 20px;
    }
    h1{
        font-size: 20px;
    }
    .input{
        font-size: 14px;
        height: 30px;
    }
}
</style>