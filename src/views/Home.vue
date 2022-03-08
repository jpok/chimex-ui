<template>

  <v-container fluid class="pa-0">

  <v-sheet class="primary white--text pa-2" elevation="5">
    <div v-bind:class="[$vuetify.breakpoint.mobile ? 'display-1' : 'display-3']" class="font-italic">Pest Control For You</div>
  </v-sheet>  


      <div class="image-container">
        <v-img max-height="30rem" class="darken" min-height="15rem" eager transition="fade-transition" src="../assets/spraying-grass.jpeg">        
        </v-img>
          
        <v-container v-if="!$vuetify.breakpoint.mobile">
          <div class="left-text-container white--text">
            <div class="font-weight-light slide-in-left pl-6 pb-4 text-h4">High quality pest control services</div>
            <div class="font-italic fade-in font-weight-light text-h6 pl-6">
              With a low environmental impact
            </div>
          </div>
          <div class="center-text-container fade-in text-center white--text">
            <div class="text-h5 font-weight-medium"> We are committed to protecting our customer’s homes from pests without compromising our commitment to preserve the natural environment all living creatures share</div> 
          </div>
          
          <div class="right-text-container slide-in-right">
            <div class="font-weight-regular text-h6 text-right white--text">
              The Chimex team understands that a pest free environment is crucial to a happy and healthy home. To ensure a pest free household Chimex Eco-Pest uses only the most effective products and techniques, so that the only time you’ll think about pests is when we’re servicing your home.
            </div>
          </div>
        </v-container>
      </div>

      <v-container v-if="$vuetify.breakpoint.mobile">
          <v-row>
            <v-col>
            <div class="primary--text font-weight-light ma-3 text-h5 text-center">High quality pest control services</div>
            <div class="font-weight-light font-italic secondary--text text-h6 text-center">
              With a low <span>environmental impact</span>
            </div>
            <div class="font-weight-light text-subtitle-1 dark-gray ma-3"> We are committed to protecting our customer’s homes from pests without compromising our commitment to preserve the natural environment all living creatures share.<span class="font-italic"></span></div> 
            
            <div class="font-weight-light text-subtitle-1 dark-gray ma-3">
            The Chimex team understands that a pest free household is crucial to a happy and healthy home for you and your family. Chimex Eco-Pest uses only the most effective products and techniques so that the only time you’ll have to think about pests is when we’re servicing your home.
            </div>
            
            </v-col>
          </v-row>
      </v-container>      

<!-- SERVICES SECTION -->

    <v-row 
    justify="center"
    class="mb-2">
      <div v-bind:class="[$vuetify.breakpoint.mobile ? 'display-1' : 'display-3']" class="primary--text font-weight-light">Our Services</div>
    </v-row>

    <v-container fluid class="grey lighten-5 elevation-n1 rounded-lg">
      <sequential-entrance fromRight>     
      <v-row>
      
      <v-col sm="6" md="3" align="center">

      <v-card                         
        min-width="15rem"
        min-height="25rem"
        class="rounded-xl pa-8 mx-auto rounded-tl-0 rounded-br-0"                                  
      >                                            
        <v-img  max-width="120px" src="@/assets/icons/prevent-icon.svg"></v-img>
        <div class="primary--text pa-2 text-h6 font-weight-light">Preventative</div>

        <div class="justify-center text-subtitle-2 dark-gray font-weight-light">
          The best time to stop a pest problem is before it begins. Chimex Eco-Pest’s preventative maintenance will keep pests out of your home and off your property guaranteed
        </div>                              
      
      </v-card>  

      </v-col>
      
      <v-col sm="6" md="3" align="center">
       
        <v-card                         
        min-width="15rem"
        min-height="25rem"
        class="rounded-xl pa-8 mx-auto rounded-tl-0 rounded-br-0"                                  
      >                                            
        <v-img  max-width="120px" src="@/assets/icons/infestation-icon.svg"></v-img>
        <div class="primary--text pa-2 text-h6 font-weight-light">Infestation</div>

        <div class="justify-center text-subtitle-2 dark-gray font-weight-light">
          No matter how bad the infestation, Chimex has you covered. Our certified service technicians will not only get rid of your household pests, but keep them from coming back
        </div>                              
      
      </v-card>  

      </v-col>                   

      <v-col sm="6" md="3" align="center">

        <v-card                         
        min-width="15rem"
        min-height="25rem"
        class="rounded-xl pa-8 mx-auto rounded-tl-0 rounded-br-0"                                  
      >                                            
        <v-img  max-width="120px" src="@/assets/icons/mosquito-icon.svg"></v-img>
        <div class="primary--text pa-2 text-h6 font-weight-light">Mosquitoes</div>

        <div class="justify-center text-subtitle-2 dark-gray font-weight-light">
           Don’t let mosquitoes suck all the fun out of your yard. At Chimex Eco-Pest we take care of your mosquitoes by eliminating them on your property and at the source
        </div>                              
      
      </v-card>  
       
      </v-col >
      <v-col sm="6" md="3" align="center">
        <v-card                         
        min-width="15rem"
        min-height="25rem"
        class="rounded-xl pa-8 mx-auto rounded-tl-0 rounded-br-0"                                  
        >                                            
        <v-img  max-width="120px" src="@/assets/icons/ant-icon.svg"></v-img>
        <div class="primary--text pa-2 text-h6 font-weight-light">Pest</div>

        <div class="justify-center text-subtitle-2 dark-gray font-weight-light">
           Keeping pests at bay is what we do. Whether it’s just a few ants or a full on cockroach invasion, Chimex Eco-Pest will make and keep your home pest free 
        </div>                              
      
      </v-card>           
      </v-col>
      </v-row>
      </sequential-entrance>
    
    </v-container>

    <!-- How We Work Section -->
    
    <v-container fluid>
      <v-row 
        justify="center"
        class="ma-10">
      <div class="primary--text font-weight-light" v-bind:class="[$vuetify.breakpoint.mobile ? 'display-1' : 'display-3']">How We Work</div>
    </v-row>
    
    <v-row 
      justify="center"
      class="ma-10">
      <v-container class="justify-text text-sm-center md-text-h5 dark-gray font-weight-light">
        At Chimex we understand you want to enjoy a pest free home without pesty sign up. Simply request a quote and a member of our team will reach out to take care of the rest. It’s as easy as booking and letting one of our certified technicians take care of the rest. 
      </v-container>
    </v-row>

    <v-row      
      justify="center">
         <v-img max-width="50rem" class="d-none d-md-block mb-n16" src="@/assets/curvey-line.png"></v-img>
    </v-row>

    <v-row 
      justify="center"
      >      

      <v-col>
        <v-card              
        class="ma-5 tint"             
        min-width="15rem"
        min-height="25rem"
        >            
       <v-row justify="center">         
         <v-img class="mt-n16" :eager="true" max-width="15rem" src="@/assets/book-step.png"></v-img>
         </v-row>
        <v-row justify="center"><v-card-title class="pa-0 text-h5 primary--text">Booking</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center font-weight-light">
          Request a quote and one of our team members will reach out the same day to schedule your appointment time. 
        </v-card-text>
      </v-card>  
      </v-col>

      <v-col>
      <v-card              
        class="ma-5 tint"             
        min-width="15rem"
        min-height="25rem"
        >            
       <v-row justify="center">         
         <v-img class="mt-n16" :eager="true" max-width="15rem" src="@/assets/clean-step.png"></v-img>
         </v-row>
        <v-row justify="center"><v-card-title class="pa-0 text-h5 primary--text">Removal</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center font-weight-light">
          One of our certified technicians will come to you and complete a full inspection before treating your entire property both inside and outside. 
        </v-card-text>
      </v-card>  
      </v-col>

      <v-col>
      <v-card              
        class="ma-5 tint"             
        min-width="15rem"
        min-height="25rem"
        >            
       <v-row justify="center">         
         <v-img class="mt-n16" :eager="true" max-width="15rem" src="@/assets/home-step.png"></v-img>
         </v-row>
        <v-row justify="center"><v-card-title class="pa-0 text-h5 primary--text">Relax</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center font-weight-light">
          Enjoy your pest free property!
        </v-card-text>
      </v-card>  
      </v-col>

    </v-row>
    </v-container>

    <!-- Pest Library -->

    <v-row 
      v-if="!$vuetify.breakpoint.mobile"
      justify="center"
      class="ma-10">
      <div class="primary--text text-h3">Pest Library</div>      
    </v-row>
     <v-container fluid v-bind:class="[!$vuetify.breakpoint.mobile ? 'grey lighten-5 elevation-n1' : '']">
        
      <v-row justify="space-around" align="center">   
          
        <v-spacer></v-spacer>
        
        <v-col cols="12" sm="12" md="4">
          
          <v-card
            class="pa-4"     
            :elevation="$vuetify.breakpoint.mobile ? 0 : 2"           
            :min-height="$vuetify.breakpoint.mobile ? '15rem': '30rem'">                                   
              <div class="text-h4 text-md-flex-h2 primary--text">Pests…?</div>
              <div 
                class="
                  text-h6 
                  secondary--text
                  text-sm-h5
                  text-md-flex-h3                                                          
                  font-italic 
                  font-weight-light">We got you covered</div>
              <div class="text-subtitle-1 justify-text dark-gray mt-12 font-weight-light">From Palmetto Bugs to Paper Wasps Chimex Eco-Pest knows that there are a wide variety of pests that call South Carolina home year round. Take a look at our pest library to see what kinds of pests are trying to make your home theirs. If you recognize a bug at home that’s not in our library please reach out and one of our certified technicians will be able to identify it for you! 
              </div>            
          </v-card>                
        </v-col>
        <v-spacer></v-spacer>
        

        <v-col sm="12" md="7" lg="6">
          <v-row justify="center">
          <v-card        
              height="130"
              width="130"  
              class="pa-2 ma-4"                               
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90/" class="pb-0 pt-2" src="@/assets/icons/ant-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Pavement Ant
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>    

          <v-card        
              height="130"
              width="130"  
             class="pa-2 ma-4"                               
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/fire-ant-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Fire Ant
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>  

            <v-card        
              height="130"
              width="130"  
             class="pa-2 ma-4"                               
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/carpenter-ant-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Carpenter Ant
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>      

            <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/rolly-polly-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Sow Bug
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>   

          <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/fish-bug-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Silverfish
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>        
        
          <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/bee-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Bee
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>    

            <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/hornet-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Hornet
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>    

            <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/wasp-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Wasp
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>   

            <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/mosquito-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Mosquito
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>   

            <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/rat-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Rat
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>             

        
          <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/cockroach-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Cockroach
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>
          <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/beetle-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Beetle
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>    

            <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/mouse-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Mouse
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>   

            <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/black-widow-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Black Widow
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>   

          <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/spider-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Spider
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>          
        
        
        
          <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/fly-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              House Fly
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>    
          
          <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/fruit-fly-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Fruit Fly
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>    

            <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/moth-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Moth
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>   

          <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/tick-icon.svg">

              <v-card-text class="dark-gray text-center">                                                      
              Tick            
              <br>              
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>

          <v-card
             class="pa-2 ma-4" 
             height="130"                              
             width="130"
            >
            <div class="green-border">
            <v-row class="pa-2" justify="center">              
              <img height="90" class="pb-0 pt-2" src="@/assets/icons/stink-bug-icon.svg">

              <v-card-text class=" dark-gray text-center">                        
              Stink Bug
              <br>
              <br>
            </v-card-text>      
            </v-row>       
            </div>                 
          </v-card>
          </v-row>
        </v-col>         

    
      </v-row>
     </v-container>

     <!-- Reviews -->
    <v-row 
      :justify="'center'"
      class="ma-2 ma-md-4">
            <div v-bind:class="[!$vuetify.breakpoint.mobile ? 'display-1' : 'text-subtitle-1']" class="primary--text text-center">What our happy customers say about Chimex</div>   
    </v-row>

    <review-carousel></review-carousel>     

  </v-container>        
</template>
<script>
import ReviewCarousel from '@/components/ReviewCarousel.vue'
import ChimexFooter from '@/components/ChimexFooter.vue'

  export default {
    name: 'Home',
    components: {
      ReviewCarousel,
      ChimexFooter        
    },
  }
</script>

<style scoped>

  .image-container{    
    position: relative;    
  }


.left-text-container {    
    position: absolute;
    top:3%;
    left: 0%;      
  }

  .center-text-container {    
    position: absolute;
    top:65%;
    left: 50%;
    transform: translate(-50%, -50%);    
  }

  .right-text-container {    
    position: absolute;    
    top:3%;
    right: 1%;
    max-width: 36rem;
  }

  .main-card {
    z-index: 5;
  }

  .darken {
 filter: brightness(50%);
}


</style>

        