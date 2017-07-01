/**
 * Created by radu on 25.06.2017.
 */
new Vue({
    el: '#exercise',
    data: {
        inputText: ''
    },
    methods: {
        showAlert: function () {
            alert('you pressed the button');
        },
        storeValue: function(event) {
            this.inputText = event.target.value;
        }
    }
});