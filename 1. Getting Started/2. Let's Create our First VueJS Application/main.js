/**
 * Created by radu on 25.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        title: 'hello world'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
});