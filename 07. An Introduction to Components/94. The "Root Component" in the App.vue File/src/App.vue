<template>
    <div id="app">
        <h1>server status: {{ status }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: 'critical'
            }
        }
    }
</script>

<style>

</style>
