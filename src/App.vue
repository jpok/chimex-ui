
<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      v-if="$vuetify.breakpoint.mobile"         
      app>
      <v-divider></v-divider>

    </v-navigation-drawer>
     
    <v-app-bar         
      app
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-title><v-img
          alt="Chimex Logo"          
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="100"
        /></v-app-bar-title>
        
        <v-spacer></v-spacer>
        <nav>
          <router-link class="pa-6" to="/">Home</router-link>
          <router-link class="pa-6" to="/residential">Residential</router-link>
          <router-link class="pa-6" to="/commercial">Commercial</router-link>
        </nav>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"      
    >
    
      <v-main>            
        <router-view></router-view>        
      </v-main>
    </v-sheet>    
  </v-app>
</template>

<script>
  export default {
     mounted () {
      console.log(this.$vuetify.breakpoint)
    },
    data: () => ({ 
      drawer: null,
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
 
 .exact-active {
    color: var(--v-secondary-base) !important;
    text-decoration: underline .25rem;
  }
</style>
