<template>
  <v-container app fluid fill-height>
    <v-row align="center"
        justify="center">
        <span class="bg"></span>
        <v-col cols="4">
          <v-card
            elevation="2"
            :loading="loading"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-orange"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-card-title>Start a race</v-card-title>
            <v-card-text>
              <v-text-field
                
                label="Access Token"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="success"
                @click="runRace"
              >
                Run Race
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    loading : false
  }),
  methods: {
    runRace () {
      this.loading = true

      setTimeout(() => (
        this.$router.push({ name: "Race"})
      ), 2000)

    },
  },
}
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('~@/assets/images/header4.jpg') no-repeat center center;
    background-size: cover;
    transform: scale(1.1);
  }

  .v-card__actions {
    padding: 0px 16px 16px 16px;
  }

  .v-card__text, .v-card__title {
    padding-bottom: 0px;
  }
</style>