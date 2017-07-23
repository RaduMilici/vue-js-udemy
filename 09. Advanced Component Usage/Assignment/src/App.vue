<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="curComp = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="curComp = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="curComp = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="curComp">
                    <app-quote></app-quote>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';
    import Quote from './components/Quote.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red,
            appQuote: Quote
        },
        data() {
            return {
                curComp: 'appBlue'
            };
        }
    }
</script>

<style>
</style>
