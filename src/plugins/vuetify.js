import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

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
});
