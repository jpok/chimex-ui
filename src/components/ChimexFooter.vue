<template>
    <v-footer height="250" padless color="primary">        
        <v-row justify="center"  class="offset-md-5"> 

            <div class="white--text mr-4">
                <p>+61 3 8376 6284</p>
                <p>info@chimex.com</p>
            </div>
            
        </v-row>
                      
        <v-img class="ftr-img" src="@/assets/footer-slope.png">             
            <v-img
            alt="Chimex Logo"          
            contain
            src="@/assets/logo.png"
            transition="scale-transition"
            width="100"
            class="ftr-logo"
            />
        </v-img>  

    </v-footer>  

        
    

</template>

<script>
export default {
    name: 'ChimexFooter' 
}
</script>

<style scoped>
    .ftr-img{   position: absolute;   bottom: 0 }
    .ftr-logo{   position: absolute;   bottom: 1rem }
</style>