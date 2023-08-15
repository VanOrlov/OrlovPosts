<template>
    <div v-if="$store.state.isAdmin">
        <h1>Страница всех пользователей</h1>
    </div>
    <div v-else>
        <h1>У вас нет прав админа для доступа к этой странице</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>