<template>

  <v-container fluid>

  <v-sheet class="home-banner">
    <h1 class="display-3 font-italic">Pest Control For You</h1>
  </v-sheet>  


  <v-row 
  class="mt-10">
   <v-spacer></v-spacer>
    <v-col>
      <v-card      
        min-width="500"
        min-height="30rem"
      >
        <v-card-text color="primary">                        
            At CHIMEX ECO-PEST our mission is to provide high quality pest control services with a low environmental impact. We are committed to protecting our customer’s homes from pests without compromising our commitment to preserve the natural environment all living creatures share.
            <br>
            <br>
            The Chimex team understands that a pest free household is crucial to a happy and healthy home environment. Chimex Eco-Pest uses only the most effective products and techniques so that the only time you’ll have to think about pests is when we’re servicing your home.         
        </v-card-text>      
      </v-card>    
    </v-col>
    
     <v-spacer></v-spacer>
    
    <v-col>
      <img class="home-image" src="../assets/home.jpeg">
    </v-col>
  </v-row>

<!-- SERVICES SECTION -->

    <v-row 
    :justify="'center'"
    class="ma-10">
      <h1 class="display-2">Our Services</h1>
    </v-row>

    <v-container fluid class="grey lighten-5">
    <v-row justify="center">      
      
      <v-card 
        class="ma-5"     
        width="25rem"
        height="25rem"
      >            
      </v-card>  
      
      
      <v-card      
        class="ma-5"     
        width="25rem"
        height="25rem"
      >            
      </v-card>  
      
    </v-row>
    
    <v-row justify="center">      
      
      <v-card 
        class="ma-5"     
        width="25rem"
        height="25rem"
      >            
      </v-card>  
      
      
      <v-card      
        class="ma-5"     
        width="25rem"
        height="25rem"
      >            
      </v-card>  
      
    </v-row>
    
    </v-container>
  </v-container>        
</template>
<script>
  
  export default {
    name: 'Home',

    components: {
    },
  }
</script>

<style scoped>
  .home-banner {    
    padding: 1rem;
    height: 6rem; 
    width: inherit;
    background-color: var(--v-primary-base);
    color: white;
    box-shadow: 1rem 1rem 20px;
  }  

  .home-image {
    max-width: 800px;
  }
</style>