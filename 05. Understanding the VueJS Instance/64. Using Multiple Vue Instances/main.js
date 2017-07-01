/**
 * Created by radu on 25.06.2017.
 */
new Vue({
    el: '#app1',
    methods: {
        sayHello() {
            return 'hello world, i am app1!';
        }
    }
});

new Vue({
    el: '#app2',
    methods: {
        sayHello() {
            return 'hello world, i am app2!';
        }
    }
});