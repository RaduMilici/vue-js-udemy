/**
 * Created by radu on 26.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        computedResult: function () {
            console.log('computed');
            return this.counter >= 5 ? 'greater or equal 5' : 'smaller 5';
        }
    },
    methods: {
        result: function () {
            console.log('methods');
            return this.counter >= 5 ? 'greater or equal 5' : 'smaller 5';
        }
    }
});