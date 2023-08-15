<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="dialog__content">
            <PostForm @hide="hideDialog"/>
        </div>
    </div>
</template>

<script>
import PostForm from '../PostForm.vue';
    export default {
        name: 'my-dialog',
        components:{
            PostForm
        },
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                
            }
        },
        methods:{
            hideDialog() {
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    z-index: 1000;
    padding: 0 20px;
}
.dialog__content{
    margin: auto;
    border-radius: 12px;
    min-height: 50px;
    min-width: 600px;
    padding: 50px;
    background: var(--color-haiti);;
}

@media (max-width: 1024px) {
    .dialog__content{
        min-width: 500px;
    }
}

@media (max-width: 768px) {
    .dialog__content{
        min-width: 80%;
    }
}

@media (max-width: 450px) {
    .dialog__content{
        padding: 30px;
    }
}

</style>