import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#2196f3",
          secondary: "#ffc107",
          accent: "#03a9f4",
          error: "#f44336",
          warning: "#ff9800",
          info: "#00bcd4",
          success: "#8bc34a"
        },
      },
    },
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
});
