/**
 * Created by radu on 01.07.2017.
 */
let vm1 = new Vue({
    el: '#app1',
    data: {
        name: 'app1'
    },
    methods: {
        sayHello() {
            return `hello world, i am ${this.name}!`;
        }
    }
});

let vm2 = new Vue({
    el: '#app2',
    methods: {
        sayHello() {
            return 'hello world, i am app2!';
        },
        onChange() {
            vm1.name = 'radu';
        }
    }
});