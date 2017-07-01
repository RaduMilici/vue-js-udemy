/**
 * Created by radu on 26.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'green',
        outline: 'outline'
    },
    computed: {
        divClasses() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    }
});