/**
 * Created by radu on 26.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        color: 'green',
        width: 100
    },
    computed: {
        myStyle() {
            return {
                backgroundColor: this.color,
                width: `${this.width}px`
            }
        }
    }
});