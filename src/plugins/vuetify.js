import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

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
      },
    },
  },
  breakpoint: {
    mobileBreakpoint: 'sm' // This is equivalent to a value of 960
  },
});
