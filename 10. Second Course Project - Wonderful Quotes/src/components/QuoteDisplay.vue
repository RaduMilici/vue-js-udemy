<template>
    <div class="quote-display">
        <p>{{ quote.text }}</p>

    </div>
</template>

<script>
    import Quote from '../Quote';

    export default {
        props: {
            quote: Quote
        }
    }
</script>

<style lang="scss" scoped>

    .quote-display {
        text-align: center;
        width: 25%;
    }

</style>