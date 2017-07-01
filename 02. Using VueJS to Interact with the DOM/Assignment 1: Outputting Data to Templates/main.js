/**
 * Created by radu on 25.06.2017.
 */
new Vue({
    el: '#exercise',
    data: {
        name: 'radu milici',
        age: new Date().getFullYear() - 1989,
        geraltUrl: 'https://i.imgur.com/lTv5uiA.jpg'
    },
    methods: {
        randomNumber: function(max) {
            return Math.round(Math.random() * max);
        }
    }
});