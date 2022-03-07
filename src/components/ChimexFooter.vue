<template>
    <v-footer height="170" padless color="primary">        
        <v-row justify="center"  class="offset-md-5"> 

            <div class="white--text">
                <p>+61 3 8376 6284</p>
                <p>info@chimex.com</p>
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