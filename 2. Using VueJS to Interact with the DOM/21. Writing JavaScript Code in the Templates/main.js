/**
 * Created by radu on 25.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function () {
            this.counter++;
        },
        updateCoords: function (event, multiply) {
            this.x = event.clientX * multiply;
            this.y = event.clientY * multiply;
        },
        alertMe: function () {
            alert('Alert!');
        }
    }
});