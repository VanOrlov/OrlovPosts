<template>
    <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
.input{
    display: flex;
    align-items: center;
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
</style>