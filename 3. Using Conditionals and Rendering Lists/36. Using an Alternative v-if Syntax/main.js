/**
 * Created by radu on 29.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        show: true
    },
    methods: {
        toggleVisible() {
            this.show = !this.show;
        }
    }
});