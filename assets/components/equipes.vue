<template>
   <div>
        <template v-for="team, index in mesEquipes">
            <template v-for="(value, key) in team">
                <div  v-if="(index % 2) == 0" class="alert alert-success">
                    <h2>{{ key }}</h2>
                    {{ value }}
                </div>
                <div  v-else class="alert alert-danger">
                    <h2>{{ key }}</h2>
                    {{ value }}
                </div>
            </template>
        </template> 
   </div>
</template>
<script>
    export default{
        data: function() {
            return {
                mesEquipes : [
                    {nom: 'Barca', couleurs:['bleu', 'rouge'], surnom : 'blaugrana'},
                    {nom: 'Milan', couleurs:['noir', 'rouge'], surnom : 'Milance'}
                ]
           }  
        }
    }
</script>
<style>

</style>