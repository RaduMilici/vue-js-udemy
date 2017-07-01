/**
 * Created by radu on 01.07.2017.
 */

Vue.component('hello', {
    template: '<p>hello world! I am a component</p>'
});

const vm1 = new Vue({
    el: '#app1'
});
