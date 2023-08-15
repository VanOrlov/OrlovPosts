<template>
    <textarea :value="modelValue" @input="updateInput" type="text" class="input"/>
</template>

<script>
    export default {
        name: 'my-area',
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
    justify-content: center;
    width: 100%;
    height: 250px;
    padding: 25px 25px;
    border-color: var(--color-haiti);
    border-radius: 25px;
    font-size: 18px;
    background-color: var(--color-haiti);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, .3);
    color: white;
    resize: vertical;
}
.input:focus{
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, .3);
}
</style>