
<template>
  <v-app id="inspire" class="o-x-h">
    <v-navigation-drawer 
      v-model="drawer"
      v-if="$vuetify.breakpoint.mobile"         
      app>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group          
          active-class="gray"
        >
          <v-list-item>
            <router-link to="/">Home</router-link>
          </v-list-item>

          <v-list-item>
             <router-link to="/residential">Residential</router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/commercial">Commercial</router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/us-and-our-products">Us & Our Products</router-link>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
     
    <v-app-bar         
      app
      absolute
      color="white"
      class="app-bar"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >

      <v-app-bar-nav-icon 
        v-if="$vuetify.breakpoint.mobile"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      
      <v-app-bar-title>
        <v-img
          alt="Chimex Logo"          
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          :max-width="$vuetify.breakpoint.mobile ? '100': '150'"
        /></v-app-bar-title>
        
        <v-spacer></v-spacer>
        <nav v-if="!$vuetify.breakpoint.mobile">
          <router-link class="pa-6" to="/">Home</router-link>
          <router-link class="pa-6" to="/residential">Residential</router-link>
          <router-link class="pa-6" to="/commercial">Commercial</router-link>
          <router-link class="pa-6" to="/us-and-our-products">About Us & Our Products</router-link>
        </nav>
        <v-spacer></v-spacer>
      
    <v-dialog      
      v-model="dialog"  
      v-bind:class="[$vuetify.breakpoint.mobile ? 'abs-dialog' : '']"
      :hide-overlay="$vuetify.breakpoint.mobile"
      :fullscreen="$vuetify.breakpoint.mobile"      
      transition="dialog-top-transition"
      :max-width="$vuetify.breakpoint.mobile ? $vuetify.breakpoint.mobile.width: '600px'"
      >
    
      <template v-slot:activator="{attrs }">
        <v-btn
        class="pa-2"               
        color="primary"
        elevation="2"
        v-bind="attrs"
        @click="dialog = true"        
        >
        Request a Quote
        </v-btn>
      </template>

      <quote-form @close-dialog="closeDialog()"></quote-form>
      </v-dialog>    
    </v-app-bar>
   
          
      <v-main style="overflow-x-hidden">       
         <v-sheet                     
          :max-height="$vuetify.breakpoint.height"
          id="scrolling-techniques-7"
          class="pa-0 ma-0 overflow-y-auto"      
    >                  
      <v-container fluid class="full-fluid overflow-x-hidden overflow-x-hidden">
      <v-scroll-x-transition hide-on-leave>
          <router-view class="full-fluid"></router-view>        
      </v-scroll-x-transition>
      </v-container>
    </v-sheet>    
    </v-main>
    
    <v-footer app absolute height="50" class="front" padless color="primary">        
        <v-row justify="space-around" align="center">           
                <div class="pl-4 white--text">803-543-4420</div>
                <div class="pr-4 white--text">customercare@chimexeco-pest.com</div>                        
        </v-row>                              

    </v-footer>  

  </v-app>
</template>

<script>

import QuoteForm from '@/components/QuoteForm.vue'

  export default {  
    components: { QuoteForm},
    methods: {
        closeDialog() {            
            this.dialog = false;
        }
    },     
    data: () => ({ 
      drawer: null,
      dialog: false,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'Residential', icon: 'mdi-image' },
        { title: 'Commercial', icon: 'mdi-help-box' },
        { title: 'About', icon: 'mdi-help-box' },
      ], 
    }),
  }
</script>

<style>  
  a { text-decoration: none; }

  .justify-text {
    text-align: justify !important;
  }

  .dark-gray {
    color: rgb(100, 98, 98);
  }
 
 .exact-active {
    color: var(--v-secondary-base) !important;
    text-decoration: underline .25rem;
  }

.transparent {
   background-color: white!important;
   opacity: 0.65;
   border-color: transparent!important;
 }

 .elevation-n1 {
  box-shadow:
    inset 0 2px 1px -1px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    inset 0 1px 3px 0 rgba(0, 0, 0, 0.12) !important;
}

.o-x-h {
  overflow-x: hidden !important;
}

.v-slide-group__prev {
  display: none !important;
}

.v-dialog {
  pointer-events: none !important;
}

.full-fluid {
  padding: 0 !important;
  margin: 0 !important;
}

.front {
  z-index: 10 !important;
}

@keyframes slideinleft {
    from {
      margin-left: -100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }


  @keyframes slideinright {
    from {
      margin-right: -100%;
      width: 300%;
    }

    to {
      margin-right: 0%;
      width: 100%;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0%;
    }

    to {
      opacity: 100%;
    }
    
  }

  .slide-in-left {
    animation-duration: 3s;
    animation-name: slideinleft;
  }

  .slide-in-right {
    animation-duration: 2s;
    animation-name: slideinright;
  }
  
  
  .fade-in {
    animation-duration: 4s;
    animation-name: fade-in;
  }

</style>
