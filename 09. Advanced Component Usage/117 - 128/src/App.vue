<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">

                <button @click="selectedComponent = 'appQuote'">quote</button>
                <button @click="selectedComponent = 'appAuthor'">author</button>
                <button @click="selectedComponent = 'appNew'">new</button>

                <hr>

                <app-quote>
                    <h1 slot="title">{{ quoteTitle }}</h1>
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </app-quote>

                <hr>

                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>

               
            </div>
        </div>
    </div>
</template>

<script>
    import appQuote from './components/Quote.vue';
    import appAuthor from './components/Author.vue';
    import appNew from './components/New.vue';

    export default {
        data() {
          return {
              quoteTitle: 'the quote',
              selectedComponent: 'appQuote'
          }
        },
        components: {
            appQuote,
            appAuthor,
            appNew
        }
    }
</script>

<style>
</style>
