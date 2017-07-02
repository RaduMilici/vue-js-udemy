<template>
    <div>
        <p>server status: {{ status }}</p>
        <button @click="changeStatus">change status</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: 'critical'
            };
        },
        methods: {
            changeStatus() {
                this.status = Math.random();
            }
        }
    }
</script>