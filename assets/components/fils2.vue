 <template>
    
    <div class="secondFils">
        <hr>
        <p>je suis le second Fils</p>
        <p>C'est le contenu de la variable de mon frère : {{proprieteVisiblePourFrere}}</p>
    </div>
 </template>
 <script>
 
 export default {
    props: {
        'proprieteVisiblePourFrere': String,
    },
    data: function() {
        return {
            'filsVar': 'var du fils',
        }
    }
 }
 </script>
 <style>
 .secondFils{
    border: #0000F0 2px solid  ;
 }
 </style>
 