import Vue from 'vue'
    import App from './app.vue'


        Vue.use(require('vue-resource'));

new Vue({
    el: 'body',
    components: {
        app: App
    }
});
