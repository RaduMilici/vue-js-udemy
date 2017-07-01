/**
 * Created by radu on 26.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    watch: {
        counter: function (newVal, oldVal) {
            console.log(`new value: ${newVal}. old value: ${oldVal}`);
            setTimeout(() => { this.counter = 0; }, 2000);
        }
    }
});