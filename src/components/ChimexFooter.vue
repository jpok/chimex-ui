<template>
    <v-footer height="170" padless color="primary">        
        <v-row justify="center"  class="offset-md-5"> 

            <div class="white--text pb-4 text-sm-h6 text-md-h5">
                <p>(803) 543-4420</p>
                <p>customercare@chimexeco-pest.com</p>
            </div>
            
        </v-row>
                      
        <v-img class="ftr-slope" src="@/assets/footer-slope.png">             
        </v-img>
        <v-img
        alt="Chimex Logo"          
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="100"        
        class="ftr-logo"
        ></v-img>

    </v-footer>  

        
    

</template>

<script>
export default {
    name: 'ChimexFooter' 
}
</script>

<style scoped>
    .ftr-logo{   position: absolute;  bottom: 4px }
    .ftr-slope{   position: absolute;   bottom: 0; }
</style>