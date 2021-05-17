<template>
  <v-app>
    <v-navigation-drawer 
      v-model="drawer"
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="orange--text text--accent-4"
        >
          <v-list-item :to="{ name: 'Home'}">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'Race'}">
            <v-list-item-icon>
              <v-icon>mdi-flag-checkered</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Current Race</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app color="primary" light>
      <v-app-bar-nav-icon 
        class="white--text"
        @click="drawerTrigger"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title>KRS</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main app>
      <router-view></router-view>
    </v-main>

    <v-footer app padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>KRS</strong> — Matt Parkes
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    drawerTrigger: function(){
      if(this.drawer == true){
        this.drawer = false;
      } else {
        this.drawer = true;
      }
    }
  }
};
</script>

<style scoped>
  .v-toolbar__title {
    color: #ffffff;
  }
</style>
