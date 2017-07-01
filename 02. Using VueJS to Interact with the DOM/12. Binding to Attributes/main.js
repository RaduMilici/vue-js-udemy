/**
 * Created by radu on 25.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        title: 'hello world',
        link: 'https://www.google.com'
    },
    methods: {
        sayHello: function() {
            return 'hello world!';
        }
    }
});