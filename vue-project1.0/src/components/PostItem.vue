<template>
    <div class="post">
        <div class="post__container">
            <div class="title">
                {{ this.name }} {{ this.surname }}
            </div>
            <div class="content">
                <h1><strong>Название: </strong>{{ post.title }}</h1>
                <strong>Описание: </strong> <h1>{{ post.content }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return{
                name: '',
                surname: ''
            }
        },
        props:{
            post:{
                type: Object,
                required: true,
            }
        },
        methods:{
            async func(post){
                const response = await axios.get(`http://192.168.1.2:3000/api/usersId/${post.user_id}`)
                this.name = response.data.name
                this.surname = response.data.surname
            }
        },
        created(){
            this.func(this.post)
        }
    }
</script>

<style scoped>
.post {
  padding: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
  background-color: var(--color-haiti);
  box-shadow: 0 0 10px 1px rgba(255, 255, 255, .1);
  border: 2px solid rgba(255, 255, 255, .1);
}

.post:not(:first-child){
    margin-top: 40px;
}

.post__container{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.title{
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    font-size: 22px;
    color: rgb(212, 255, 57);
    padding-bottom: 20px;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

@media (max-width: 768px) {
    .post{
        padding: 20px;
    }
}

@media (max-width: 425px) {
    .post{
        padding: 15px;
    }
}
</style>