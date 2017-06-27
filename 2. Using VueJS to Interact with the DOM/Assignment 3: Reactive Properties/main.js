/**
 * Created by radu on 27.06.2017.
 */
new Vue({
    el: '#exercise',
    data: {
        value: 0,
        timeToReset: 2000
    },
    computed: {
        result: function() {
            return this.value < 10 ? 'not there yet' : 'done';
        }
    },
    watch: {
        result: function() {
            setTimeout( () => { this.value = 0; }, this.timeToReset);
        }
    }
});