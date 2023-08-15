<template>
    <div class="posts">
        <my-aside></my-aside>
        <div class="posts__container">
            <div class="create-post__container">
                <n-button style="font-size: 16px; border-radius: 10px; margin-right: 10px;" type="info" @click="showDialog">Создать пост</n-button>
                <h1 class="quantity_posts">Кол-во постов: {{ this.quantity_posts }}</h1>
            </div>
            <my-dialog v-model:show="dialogVisible">
                <post-form/>
            </my-dialog>   
            <div class="main-posts">
                <post-list :posts="this.posts"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PostForm from "@/components/PostForm";
import MyAside from '@/components/MyAside';
import PostList from '@/components/PostList';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
    export default {
        data(){
            return{
                dialogVisible: false,
                posts: [],
                quantity_posts: null
            }
        },
        methods:{
            showDialog(){
                this.dialogVisible = true
            },
            async getPosts(){
                const response = await axios.get('http://192.168.1.2:3000/api/posts')
                this.posts = response.data
                this.quantity_posts = response.data.length
            }
        },
        components: { 
            MyAside,
            PostForm,
            PostList
        },
        created(){
            const store = useStore()
            const router = useRouter();
            if (!store.state.isAuth) {
                router.push('/login')
            }
            this.getPosts()
        }
    }
</script>

<style scoped>
.posts{
    display: flex;
    width: 100%;
    min-height: 100%;
}

.posts__container{
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding: 20px 100px;
    flex-direction: column;
}
.create-post__container{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.quantity_posts{
    margin-left: auto;
    font-size: 20px;
    color: teal;
}
.main-posts{
    display: flex;
    width: 100%;
    height: auto;
    padding: 0 100px;
}

@media (max-width: 1024px) {
    .posts__container{
        padding: 20px 20px 20px 75px;
    }
}

@media (max-width: 768px) {
    .main-posts{
        padding: 0 50px;
    }
}
@media (max-width: 425px) {
    .main-posts{
        padding: 0 20px;
    }
}
</style>