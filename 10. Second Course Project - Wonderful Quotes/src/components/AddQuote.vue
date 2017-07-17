<template>
    <div class="add-quote container">
        <h4>quote</h4>
        <textarea cols="60" rows="5" v-model.trim="quoteText"></textarea>
        <br>
        <button
            @click="onAddQuote"
            :disabled="isValidQuote"
        >add quote</button>
    </div>
</template>

<script>
    import Quote from '../Quote.js';

    export default {
        data() {
            return {
                quoteText: ''
            };
        },
        methods: {
            onAddQuote() {
                this.$emit('addQuote', new Quote(this.quoteText));
                this.quoteText = '';
            }
        },
        computed: {
            isValidQuote() {
                return this.quoteText.length === 0;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .add-quote {
        text-align: center;
        margin-top: 10px;
        padding: 15px;
        box-sizing: border-box;

        & h4 {
            text-align: left;
            margin: 0 0 15px 0;
        }

        & textarea {
            width: 100%;
            resize: none;
            border-radius: 5px;
        }
    }

</style>