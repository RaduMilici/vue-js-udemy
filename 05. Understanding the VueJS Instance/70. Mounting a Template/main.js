/**
 * Created by radu on 01.07.2017.
 */
const vm1 = new Vue({
    methods: {
        sayHello() {
            return `hello world, i am app1!`;
        }
    }
});
vm1.$mount('#app1');

const vm2 = new Vue({
    template: '<p>hello world, i am app2!</p>'
});

vm2.$mount('#app2');