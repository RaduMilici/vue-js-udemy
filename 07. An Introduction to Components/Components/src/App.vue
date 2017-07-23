<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <server-details></server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import appHeader from './components/shared/Header.vue';
    import appServers from './components/server/Servers.vue';
    import serverDetails from './components/server/ServerDetails.vue';
    import appFooter from './components/shared/Footer.vue';

    export default {
        components: { appHeader, appServers, serverDetails, appFooter }
    }
</script>

<style>

</style>
