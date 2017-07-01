/**
 * Created by radu on 26.06.2017.
 */
new Vue({
    el: '#app',
    data: {
      link: {
          name: 'apple',
          url: 'https://apple.com'
      }
    },
    methods: {
        changeLink: function () {
            this.link.name = 'google';
            this.link.url = 'https://google.com';
        }
    }
});