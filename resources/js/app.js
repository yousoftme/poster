require('./bootstrap');

require('alpinejs');

import Vue from 'vue/dist/vue.js';

Vue.component('poster', require('./components/Poster.vue').default);

var app = new Vue({
    el: '#app',
    methods: {
        open () {}
    },
}); 