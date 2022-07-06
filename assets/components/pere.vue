 <template>
    <div class="font-pere">
        <hr>
        <button @click="actifComponent = 'fils3-component'">3éme fils</button>
        <button @click="actifComponent = 'fils4-component'">4éme fills</button>
        <hr>
            <keep-alive>
            <component :is="actifComponent"></component>
            </keep-alive>
        <hr> 
        <p>Je suis le template pere et ma variable est {{ pereVar }} </p >
        <input :style="{borderColor:filsVar}" type="text"  v-model="varExterne">
        <fils-compnent 
        :propriete-visible="varExterne" 
        @setDataFromSon="filsVar = $event"
        @toMyBrother="secondSonVar = $event"
        ></fils-compnent>
        <hr>
        <fils2-component :proprieteVisiblePourFrere="secondSonVar "></fils2-component>
    </div>
 </template>
 <script>
 import { mapState } from 'vuex'
 export default {
    data: function() {
        return {
            'pereVar': 'var du pere',
            'varExterne' : 'je suis la variable du pere externe',
            'filsVar': 'yellow',
            'secondSonVar' : '',
             'actifComponent': 'fils3-component'
        }   
    },
    computed: mapState([
        'products', 
        'productsInBag' 
   ]),
 }
 </script>
 <style>
    .font-pere{
        background-color: white;
        margin: 20px;
    }
 </style>
 