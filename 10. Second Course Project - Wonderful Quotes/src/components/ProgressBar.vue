<template>
    <div>
        <h3>quotes addded</h3>
        <div class="progress">
            <div class="progress-bar">
                {{ current }} / {{ max }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'progressbar',
        props: {
            current: Number,
            max: Number
        }
    }
</script>

<style lang="scss" scoped>

    .progress {
        width: 100%;
        height: 25px;
        border-radius: 5px;
        background-color: lightgray;
        overflow: hidden;

        &-bar {
            width: 50%;
            height: 100%;
            background-color: dodgerblue;
            text-align: center;
        }
    }

</style>