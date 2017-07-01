/**
 * Created by radu on 25.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        title: 'hello world',
        link: 'https://www.google.com',
        finishedLink: '<a href="https://google.com">link</a>'
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello';
            return this.title;
        }
    }
});