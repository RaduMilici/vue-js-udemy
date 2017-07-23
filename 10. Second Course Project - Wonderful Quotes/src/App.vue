<template>
    <div class="container">
        <progress-bar :current="quotes.length" :max="maxQuotes"></progress-bar>
        <add-quote @addQuote="addQuote"></add-quote>

        <div class="quote-gallery">
            <quote-display
                    v-for="quote in quotes"
                    :key="quote.id"
                    :quote="quote">
            </quote-display>
        </div>

    </div>
</template>

<script>
    import ProgressBar from './components/ProgressBar.vue';
    import AddQuote from './components/AddQuote.vue';
    import QuoteDisplay from './components/QuoteDisplay.vue';


    export default {
        name: 'app',
        components: { ProgressBar, AddQuote, QuoteDisplay },
        data () {
            return {
                maxQuotes: 10,
                quotes: []
            }
        },
        methods: {
            addQuote(event){
                if(this.quotes.length < this.maxQuotes)
                    this.quotes.push(event);
            }
        }
    }
</script>

<style lang="scss">

    .container {
        margin: auto;
        width: 80%;
    }

    .quote-gallery {
        display: flex;
    }

</style>
