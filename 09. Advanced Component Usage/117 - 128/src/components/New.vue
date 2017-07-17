<template>
    <div>
        <button @click="counter++">increase</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            };
        },
        activated() {
            console.log('activated');
        },
        deactivated() {
            console.log('deactivated');
        }
    }
</script>

<style scoped>
</style>