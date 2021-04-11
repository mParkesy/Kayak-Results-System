<template>
    <v-container app fluid>
        <v-row align="start" justify="center">
            <v-col cols="10">
                <v-card
                    class="mx-auto"
                >

                    <v-card-title>
                        Add race category
                    </v-card-title>


                    <v-card-actions>
                        <v-btn
                            color="orange lighten-2"
                            text
                        >
                            Add
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
    name: 'Race',
    components: {

    },
    data: () => ({
    }),
    methods: {

    },
    }
</script>

<style scoped>
    .container.fill-height {
        align-items: start;
    }
</style>
