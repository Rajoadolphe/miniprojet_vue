 <template>
    <div>
        <p>Je suis le template pere et ma variable est {{ filsVar }} </p >
        <hr>Je suis la propriété envoyer de l'exterieur par le composant pere {{proprieteVisible}}
        <button @click="sendDataToParent">Envoyer des données à mon péré</button>
        <button @click="sendDataToBrother">Envoyer des données à mon frére</button>
    </div>
 </template>
 <script>
 
 export default {
    props: {
        'proprieteVisible': String,
    },
    data: function() {
        return {
            'filsVar': 'var du fils',
            'couleurFavoriteDuFils' : 'blue'
        }
    },
    methods : {
        sendDataToParent(){
            this.$emit('setDataFromSon', this.couleurFavoriteDuFils);
        },
        sendDataToBrother(){
            this.$emit('toMyBrother', 'Données du fils 1');
        }
            
        }
 }
 </script>
 <style>
 
 </style>
 