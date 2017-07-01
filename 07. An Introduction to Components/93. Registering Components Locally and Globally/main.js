/**
 * Created by radu on 01.07.2017.
 */

//define here to use privately in app1
const statusComp = {
    data() {
        return { status: 'critical '};
    },
    template: '<p>server status: {{ status }} (<button @click="changeStatus">change</button>)</p>',
    methods: {
        changeStatus() {
            this.status = 'normal';
        }
    }
};

//define globally here
Vue.component('date', {
    data() {
      return {
          date: new Date()
      }
    },
    template: '<p>current date: {{ date }}</p>'
});

const vm1 = new Vue({
    el: '#app1',
    components: {
        status: statusComp
    }
});

const vm2 = new Vue({
    el: '#app2'
});
