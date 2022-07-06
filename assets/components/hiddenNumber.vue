<template>
    <div>
        <p>Taper chiffre sur la formulaire</p>
        <input type="text" v-model="tentative">
        {{ showResult }}
    </div>
</template>
<script>

export default{
    data: function() {
        return {
            hiddenNumber: Math.floor((Math.random())*10),
            tentative: '',
        }
        
    },
    computed: {
        showResult: function(){
            console.info("Dans ShowResult");
            if (this.tentative == "") {
                return 'Veuillez entamer le jeu'
            }else if (this.tentative == this.hiddenNumber) {
                return 'Gagné D'
            }return 'Veuillez réesseyer encore'
        }
    }
}
</script>
<style>
  div{
    background-color: chartreuse;
    margin: 10px;
  }
</style>