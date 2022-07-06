/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import Vue from 'vue';   
import hiddenNumber from './components/hiddenNumber'
import Equipes from './components/equipes' 

// start the Stimulus application
import './bootstrap';
Vue.component('hidden-number',hiddenNumber);


const app = new Vue (
    {
        el: '#app',
        delimiters: ['${', '}'],
        data: {
            message: 'Bienvenue dans Vue',
            lien: 'https://vuejs.org',
            monstyle: { color : 'red' },
            compteur: 0
        },
        methods: {
            showMessage: function(){
              return  this.message;
            },
            incrementation: function(){
                this.compteur++;
            }
        },
        components: {
            'app-equipes': Equipes
        }
    }
)

const app2 = new Vue (
    {
        el: '#app2',
        delimiters: ['${', '}'],
        data: {
            message: 'Bienvenue dans le deuxieme composant',
        },
        methods: {
            showMessage: function(){
              return  this.message;
            }
        }
    }
)