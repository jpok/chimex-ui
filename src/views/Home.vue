<template>

  <v-container fluid>

  <v-sheet class="primary white--text ma-2" elevation="5">
    <div v-bind:class="[$vuetify.breakpoint.mobile ? 'display-1' : 'display-3']" class="font-italic">Pest Control For You</div>
  </v-sheet>  

<!-- 
  <v-row     
    class="pl-4"> -->
    <!-- <v-col md="6"> -->
      <!-- <v-card
        class="pa-4 main-card"            
        :elevation="$vuetify.breakpoint.mobile ? 0 : 2" 
        :min-width="$vuetify.breakpoint.mobile ? 300: '65vh'"        
      >
        <v-card-text>  
          <div v-bind:class="[$vuetify.breakpoint.mobile ? 'text-section-1' : 'text-h6']" class="dark-gray font-weight-medium">                      
            At Chimex Eco-Pest our mission is to provide high quality pest control services with a low environmental impact. We are committed to protecting our customer’s homes from pests without compromising our commitment to preserve the natural environment all living creatures share.
            <br>
            <br>
            The Chimex team understands that a pest free household is crucial to a happy and healthy home environment. Chimex Eco-Pest uses only the most effective products and techniques so that the only time you’ll have to think about pests is when we’re servicing your home.         
          </div>
        </v-card-text>      
      </v-card>     -->
    <!-- <div class="text-h3 font-weight-light" style="line-height:6rem">At <span style="color:var(--v-primary-base)" class="">Chimex </span>Eco-Pest</div>
    <div class="text-h6 ml-11" style="line-height:6rem"><span style="text-decoration: underline">Our mission</span> is to provide <span class="font-italic">high quality</span> pest control services with a low environmental impact </div>
    <div class="text-h6 ml-11 font-weight-light"> We are committed to protecting our customer’s homes from pests without compromising our commitment to preserve the natural environment all living creatures share.<span class="font-italic"></span></div> -->


    <!-- </v-col> -->
    
     <!-- <v-spacer></v-spacer> -->
    
    <!-- <v-col> -->
      <!-- <v-img max-height="29rem" eager transition="fade-transition"  v-bind:class="[$vuetify.breakpoint.mobile ? '' : 'rounded-lg rounded-r-0 home-image']" src="../assets/home.jpeg"></v-img> -->
      <div class="image-container">
        <v-img max-height="40rem" min-height="20rem" eager transition="fade-transition" src="../assets/pest-sprayers.jpg">        
        </v-img>
          
          <div class="left-text-container primary--text">
            <!-- <div class="font-weight-light text-h3 pb-8"><span style="text-decoration: underline">Our mission</span> is to provide </div> -->
            <div class="font-italic font-weight-light pl-6 pb-4 text-h4">high quality pest control services</div>
            <div class="font-weight-light text-h5 pl-6">
              with a low <span style="text-decoration: underline">environmental impact</span>
            </div>
          </div>
          <div class="center-text-container text-center white--text">
            <div class="text-h5 font-weight-light"> We are committed to protecting our customer’s homes from pests without compromising our commitment to preserve the natural environment all living creatures share.<span class="font-italic"></span></div> 
          </div>
          
          <div class="right-text-container font-weight-light text-subtitle-1 text-right primary--text">
            The Chimex team understands that a pest free household is crucial to a happy and healthy home for you and your family. Chimex Eco-Pest uses only the most effective products and techniques so that the only time you’ll have to think about pests is when we’re servicing your home.
          </div>
      </div>      
        <!-- <v-img max-height="10rem" v-if="!$vuetify.breakpoint.mobile" class="grass-dots" src="../assets/grass-dots.png"></v-img> -->
        
    <!-- </v-col> -->
  <!-- </v-row> -->

<!-- SERVICES SECTION -->

    <v-row 
    justify="center"
    class="ma-10">
      <div class="text-h3 primary--text font-weight-light">Our Services</div>
    </v-row>

    <v-container fluid class="grey lighten-5 elevation-n1">
      <sequential-entrance fromRight>     
      <v-row>
      <v-col>
      <v-card       
        class="ma-5 pa-4 rounded-xl rounded-tl-0 rounded-br-0"             
        max-width="25rem"
        max-height="25rem"        
      >            
        <v-row justify="center"><v-icon color="secondary" size="10rem">mdi-grass</v-icon></v-row>
        <v-row justify="center"><v-card-title class="secondary--text">Preventative</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center">
          The best time to stop a pest problem is before it begins. Chimex Eco-Pest’s preventative maintenance will keep pests out of your home and off your property guaranteed
        </v-card-text>
      </v-card>  
      </v-col>
      <v-col>
       <v-card       
        class="ma-5 pa-4 rounded-xl rounded-tl-0 rounded-br-0"             
        max-width="25rem"
        max-height="25rem"        
      >            
        <v-row justify="center"><v-icon color="secondary" size="10rem">mdi-shield-bug</v-icon></v-row>
        <v-row justify="center"><v-card-title class="secondary--text">Infestation</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center">
          No matter how bad it’s got, Chimex has you covered. Our certified service technicians will not only get rid of your household pests, but keep them from coming back
        </v-card-text>
      </v-card>  
      </v-col>                   

      <v-col>
       <v-card       
        class="ma-5 pa-4 rounded-xl rounded-tl-0 rounded-br-0"             
        max-width="25rem"
        max-height="25rem"        
      >            
        <v-row justify="center"><v-icon color="secondary" size="10rem">mdi-bug</v-icon></v-row>
        <v-row justify="center"><v-card-title class="secondary--text">Mosquito</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center">
          Don’t let mosquitoes suck all the fun out of your yard. At Chimex Eco-Pest we take care of your mosquitoes by eliminating them on your property and at the source
        </v-card-text>
      </v-card>  
      </v-col>
      <v-col>
       <v-card       
        class="ma-5 pa-4 rounded-xl rounded-tl-0 rounded-br-0"             
        max-width="25rem"
        max-height="25rem"        
      >            
        <v-row justify="center"><v-icon color="secondary" size="10rem">mdi-close-octagon</v-icon></v-row>
        <v-row justify="center"><v-card-title class="secondary--text">Pest</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center">
          Keeping pests at bay is what we do. Whether it’s just a few ants or a full on cockroach invasion, Chimex Eco-Pest will make and keep your home pest free 
        </v-card-text>
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
      <div class="text-h3 primary--text font-weight-light">How We Work</div>
    </v-row>
    
    <v-row 
      justify="center"
      class="ma-10">
      <v-container class="center text-h5 dark-gray text-center font-weight-light">At Chimex we understand you want to enjoy a pest free home without pesty sign up. Simply request a quote and a member of our team will reach out to take care of the rest. It’s as easy as booking and letting one of our certified technicians take care of the rest. 
      </v-container>
    </v-row>

    <v-row      
      justify="center">
         <v-img max-width="50rem" class="mb-n16" src="@/assets/curvey-line.png"></v-img>
    </v-row>

    <v-row 
      :justify="'center'"
      class="ma-10">      
        <v-card              
        class="ma-5 tint"             
        width="25rem"
        height="25rem"
        >            
       <v-row justify="center">         
         <v-img class="mt-n16" max-width="15rem" src="@/assets/book-step.png"></v-img>
         </v-row>
        <v-row justify="center"><v-card-title class="pa-0 text-h5 primary--text">Booking</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center">
          FILL
        </v-card-text>
      </v-card>  

      <v-card              
        class="ma-5 tint"             
        width="25rem"
        height="25rem"
        >            
       <v-row justify="center">         
         <v-img class="mt-n16" max-width="15rem" src="@/assets/clean-step.png"></v-img>
         </v-row>
        <v-row justify="center"><v-card-title class="pa-0 text-h5 primary--text">Booking</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center">
          FILL
        </v-card-text>
      </v-card>  

      <v-card              
        class="ma-5 tint"             
        width="25rem"
        height="25rem"
        >            
       <v-row justify="center">         
         <v-img class="mt-n16" max-width="15rem" src="@/assets/home-step.png"></v-img>
         </v-row>
        <v-row justify="center"><v-card-title class="pa-0 text-h5 primary--text">Booking</v-card-title></v-row>
        
        <v-card-text class="text-subtitle-1 primary--text text-center">
          FILL
        </v-card-text>
      </v-card>  

    </v-row>
    </v-container>

    <!-- Pest Library -->

    <v-row 
    :justify="'center'"
    class="ma-10">
      <div class="primary--text text-h3">Pest Library</div>      
    </v-row>
     <v-container fluid class="grey lighten-5 elevation-n1">
        
      <v-row :justify="'center'" class="mt-6">   
          
        <v-col md="5">
          <v-card
            class="pa-2"     
            :elevation="$vuetify.breakpoint.mobile ? 0 : 2" 
            :min-width="$vuetify.breakpoint.mobile ? 450: 500"
            :min-height="$vuetify.breakpoint.mobile ? '15rem': '30rem'">
            <v-card-text>                        
              <div class="display-3 primary--text">Pests…?</div>
              <div class="display-2 secondary--text font-italic font-weight-light mt-6">We got you covered</div>
              <div class="text-subtitle-1 mt-12 font-weight-light">From Palmetto Bugs to Paper Wasps Chimex Eco-Pest knows that there are a wide variety of pests that call South Carolina home year round. Take a look at our pest library to see what kinds of pests are trying to make your home theirs. If you recognize a bug at home that’s not in our library please reach out and one of our certified technicians will be able to identify it for you! </div>
            </v-card-text>      
          </v-card>        
        </v-col>

        <v-spacer></v-spacer>

        <v-col v-for="n in 5" :key="n"> 
          <v-row justify="center" v-for="j in 5" :key="j" class="pa-4">
            <v-card                               
            >
            <v-icon color="secondary" size="4rem">$mouseIcon</v-icon>
            <v-card-text>                        
              Mouse
            </v-card-text>      
          </v-card>        
          </v-row>
        </v-col>

      </v-row>
     </v-container>

     <!-- Reviews -->
    <v-row 
      :justify="'center'"
      class="ma-10">
            <h1 class="text-h2 primary--text">What our happy customers say about Chimex</h1>   
    </v-row>

    <review-carousel></review-carousel>  

    <v-img src="@/assets/map.png" max-height="20rem">
      <div class="display-2 ma-4 white--text">Our Geo</div>
    </v-img>
        
    <chimex-footer></chimex-footer>

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
  .grass-dots {
    margin-top: -22rem;
    margin-left: -7rem;    
    animation: float 6s ease-in-out infinite;
  }

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
    top:67%;
    left: 50%;
    transform: translate(-50%, -50%);    
  }

  .right-text-container {    
    position: absolute;
    top:3%;
    left: 65%;
    width: 35rem;
    /* transform: translate(-50%, -50%);     */
  }

  .main-card {
    z-index: 5;
  }

  @keyframes float {
	0% {		
		transform: translatey(0px);
	}
	50% {		
		transform: translatey(-8px);
	}
	100% {		
		transform: translatey(0px);
	}
}

</style>

        