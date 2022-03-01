import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import resManPropertyIcon from '@/assets/icons/res-man-property-icon.vue'
import warehouseIcon from '@/assets/icons/warehouse-icon.vue'
import foodTruckIcon from '@/assets/icons/food-truck-icon.vue'
import hotelIcon from '@/assets/icons/hotel-icon.vue'
import storefrontIcon from '@/assets/icons/storefront-icon.vue'
import mouseIcon from '@/assets/icons/mouse-icon.vue'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

Vue.use(SequentialEntrance);
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#04a1fe',
        secondary: '#21be96',
        accent: '#f4ce51',
        error: '#d2410e',
        tint: '#F2FAFF'
      },
    },
  },
  icons: {    
    values: {
      resManPropertyIcon: {
        component: resManPropertyIcon
      },
      warehouseIcon: {
        component: warehouseIcon      
      },
      foodTruckIcon: {
        component: foodTruckIcon      
      },
      hotelIcon: {
        component: hotelIcon      
      },
      storefrontIcon: {
        component: storefrontIcon      
      },
      mouseIcon: {
        component: mouseIcon
      }
    },
    breakpoint: {      
    }
  }
});

