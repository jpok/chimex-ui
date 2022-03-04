<template>
<v-container fluid>
  <v-sheet class="primary white--text pa-2" elevation="5">
    <div v-bind:class="[$vuetify.breakpoint.mobile ? 'display-1' : 'display-3']" class="font-italic">Pest Control For a Better Home</div>
  </v-sheet>  


   <v-row 
        justify="center"
        class="ma-10">                
        <v-col  md="8">
          <div class="justify-text dark-gray text-h6 font-weight-light">
            Chimex Eco-Pest knows that in the Palmetto State pests are almost always present. Bugs are a part of our natural environment but they shouldn't be a part of your home environment. Some pests not only look mean but also transmit disease and destroy property. Don’t let pests push you out, choose Chimex to protect you and create a better home.  
          </div>
    </v-col>
   </v-row>

<v-sheet class="grey lighten-5" v-bind:class="[$vuetify.breakpoint.mobile ? '' : 'elevation-n1']">  
  <v-container>
   <v-row    
    align="center"        
    justify="space-around"
      
    >
      <v-col justify="center" cols="12" sm="6" md="5">
      <v-sheet class="ma-2" :elevation="!$vuetify.breakpoint.mobile ? 3 : 0">
      <v-tabs>
        <v-tab class="text-subtitle-2 text-md-subtitle-1">Inspection</v-tab>
          <v-tab-item>
            <v-card
            flat            
            min-height="22rem"                        
            >
          <v-row align="center">
            <v-col cols="8">
              <v-card-text class="dark-gray justify-text text-subtitle-1">Before beginning the pesticide application, a licensed Chimex technician takes the time to fully inspect the interior and exterior of your property. Identifying pest hotspots and entry points to provide the best treatment for your unique home and property. </v-card-text>
            </v-col>
            <v-col  cols="4">
              <v-img class="ma-4" :eager="true" transition="scale-transition" src="@/assets/inspect.png" :max-width="$vuetify.breakpoint.xs ? '5rem' : '8rem'"></v-img>      
          </v-col>
          </v-row>
          </v-card>
          </v-tab-item>
        
        <v-tab class="text-subtitle-2 text-md-subtitle-1">Interior</v-tab>
        <v-tab-item>
            <v-card                        
            flat
            min-height="22rem"   
            >
              <v-row align="center">
            <v-col cols="8">
          <v-card-text class="text-subtitle-1 justify-text dark-gray">At Chimex we believe that you know your home best. That's why we work with you to locate the areas inside your home where pests invade. We treat those areas directly, providing effective and long lasting protection that's pet and kid friendly.</v-card-text>
                </v-col>
            <v-col cols="4">
              <v-img class="ma-4" eager transition="scale-transition" src="@/assets/living-room.png" :max-width="$vuetify.breakpoint.xs ? '5rem' : '8rem'"></v-img>      
          </v-col>
          </v-row>
          </v-card>
          </v-tab-item>
        <v-tab class="text-subtitle-2 text-md-subtitle-1">Exterior</v-tab>
        <v-tab-item>
            <v-card                        
            flat
            min-height="22rem"   
            >
            <v-row align="center">
            <v-col cols="8">
          <v-card-text class="text-subtitle-1 justify-text dark-gray">Chimex Eco-Pest believes that a good defense is the best offense. By giving your home’s foundation a full barrier treatment we keep the pests out of your home and off your mind.
          </v-card-text>
               </v-col>
            <v-col cols="4">
              <v-img class="ma-4" eager transition="scale-transition" src="@/assets/house.png" :max-width="$vuetify.breakpoint.xs ? '5rem' : '8rem'"></v-img>      
          </v-col>
          </v-row>
          </v-card>
          </v-tab-item>
        <v-tab class="text-subtitle-2 text-md-subtitle-1">Yard</v-tab>
        <v-tab-item>
            <v-card                        
            flat
            min-height="22rem"   
            >
          <v-row align="center">
            <v-col cols="8">
          <v-card-text class="text-subtitle-1 justify-text dark-gray">Chimex Eco-Pest knows that outdoor living spaces are an important part of your home. That's why we do a full yard treatment that keeps the stingers, clingers and biters from ruining all the fun the outdoors has to offer. </v-card-text>
                 </v-col>
            <v-col cols="4">
              <v-img class="ma-4" eager transition="scale-transition" src="@/assets/yard.png" :max-width="$vuetify.breakpoint.xs ? '5rem' : '8rem'"></v-img>      
          </v-col>
          </v-row>
          </v-card>
          </v-tab-item>
      </v-tabs>
      </v-sheet>
      </v-col>
      
      <v-col sm="6" md="5">
        <v-img :max-width="$vuetify.breakpoint.mobile ? $vuetify.breakpoint.width - 50: '35rem'" class="ma-4" eager transition="scale-transition" src="@/assets/residential-1.png"></v-img>      
      </v-col>
   </v-row>
   </v-container>
</v-sheet>
   
  <v-row justify="center" v-bind:class="[$vuetify.breakpoint.mobile ? 'display-1' : 'display-3']" class="ma-12 primary--text font-weight-light">Our Promise</v-row>        
            
  <v-row justify="center" class="ma-4 dark-gray text-h6 text-center font-weight-light">Chimex Eco-Pest is committed to keeping the pests out and you satisfied. If you’re still seeing even the occasional pest after we treat your home, call us back for a free re-service. We guarantee our work and its results.</v-row>        
    
        
    <div class="gr-container">                
    <v-img :eager="true" max-height="25rem" class="mt-4 fade" src="@/assets/inspection-site.jpeg"></v-img>       
    <v-img :eager="true" class="gr" src="@/assets/satisfaction-badge.png" :max-width="$vuetify.breakpoint.xs ? '10rem' : '20rem'"></v-img>
    <v-img class="ma-0" :eager="true" src="@/assets/map.png" :max-width="'100%'" max-height="10rem"></v-img>    
    </div>  
    
</v-container>

</template>

<script>
import ChimexFooter from '@/components/ChimexFooter.vue'

  export default {
    name: 'Residential',
    components: {      
      ChimexFooter        
    },
  }
</script>

<style scoped>

.gr-container {
    position: relative;    
    overflow-x: hidden;
}

.gr { 
    position: absolute;    
    top: 70%;
    left: 85%;
    z-index: 5;
    transform: translate(-50%, -50%);
}
.slidein {
  max-width: 600px;
  padding: 2em 3em;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background: #ddd;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

/* before the element is shown, start off the screen to the right */
.slide-enter, .slide-leave-active {
  right: -100%;
}

</style>

