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
                @click="validateRace(true)"
              >
                Run Race
              </v-btn>
              <div class="or-separator"> OR </div>
              <v-btn
                color="success"
                @click="validateRace(false)"
              >
                Run Custom
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <v-card>
        <v-card-title class="headline">
          You already have a race running
        </v-card-title>
        <v-card-text>Details of race...</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="runRace"
          >
            Overwrite race
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    loading : false,
    dialog : false,
    import : false
  }),
  methods: {
    validateRace (isImport) {
      this.loading = true
      this.import = isImport;
      var isRace = localStorage.raceRunning;
      if(isRace != undefined || isRace == true){
        // alert user they will overwrite an incomplete race
        this.dialog = true;
      } else {
        this.runRace()
      }

    },
    runRace(){
      localStorage.raceRunning = true;
      localStorage.raceCategories = [];
      if(this.isImport){ 
        // api call
      }

      setTimeout(() => (
        this.$router.push({ name: "Race"})
      ), 2000)
    }
  },
}
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 60px;
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

  .or-separator {
    margin: 0px 10px;
  }
</style>