import Vue from 'vue';
import './styles/main.css';
import pereCompnent from './components/pere';
import filsCompnent from './components/fils';
import fils2Compnent from './components/fils2';
import fils3Compnent from './components/fils3';
import fils4Compnent from './components/fils4';
import AppCompnent from './components/app';





Vue.component('pere-compnent',pereCompnent);
Vue.component('fils-compnent',filsCompnent);
Vue.component('fils2-component',fils2Compnent);
Vue.component('fils3-component',fils3Compnent);
Vue.component('fils4-component',fils4Compnent);


new Vue ({
    el : '#app',
    render : h=>h(AppCompnent)
}) 

