<template>
    <v-container app fluid fill-height>
        <v-row align="start" justify="center">
            <v-col cols="9">
                <transition-group name="fade">
                    <v-card
                        v-for="category in raceCategories"
                        :key="category.id"
                        class="mx-auto"
                    >

                        <v-card-title >
                            <div class="title-text">{{ category.raceName }} - {{ category.raceType }}</div>
                            <div class="edit-category">
                                <v-icon
                                    large
                                    color="orange lighten-2"
                                    @click="triggerEditCategory(category)"
                                >
                                    mdi-circle-edit-outline
                                </v-icon>
                            </div>
                        </v-card-title>

                        <div class="raceTable">
                            <v-data-table
                                :headers="headers"
                                :items="category.paddlers"
                                multi-sort
                                class="elevation-1"
                            ></v-data-table>
                        </div>

                        <v-card-actions>
                            <v-btn
                                color="orange lighten-2"
                                text
                            >
                                Add Paddler
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </transition-group>
            </v-col>
            <v-col cols="3" class="options-col">
                <v-card
                    class="mx-auto categoryCard"
                >

                    <v-card-title>
                        Add race category/division
                    </v-card-title>
                    <!-- <v-card-subtitle>
                        Add race divisions here.
                    </v-card-subtitle> -->

                    <v-form 
                        class="addCategoryForm"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-container>
                            <v-row>
                                <v-col
                                cols="12"
                                >
                                    <v-text-field
                                        v-model="newCategoryName"
                                        label="Category Name"
                                        required
                                        :rules="newCategoryRules"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                cols="12"
                                >
                                    <v-radio-group
                                        row
                                        v-model="newCategoryType"
                                        :rules="newCategoryTypeRules"
                                    >
                                        <div
                                            v-for="type in raceTypes"
                                            :key="type"
                                        >
                                            <v-radio
                                                :label="type"
                                                :value="type"
                                            ></v-radio>
                                        </div>
                                    </v-radio-group>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>

                    <v-card-actions>
                        <v-btn
                            :disabled="!valid"
                            color="green"
                            @click="validate"
                        >
                            Add
                        </v-btn>
                    </v-card-actions>
                </v-card>

                <transition name="fade">
                    <v-card
                        class="mx-auto categoryCard"
                        v-if="isEdit"
                    >
                        <v-card-title>
                            Edit race category/division
                        </v-card-title>
                        <!-- <v-card-subtitle>
                            Add race divisions here.
                        </v-card-subtitle> -->

                        <v-form 
                            class="editCategoryForm"
                            ref="editform"
                            v-model="editvalid"
                            lazy-validation
                        >
                            <v-container>
                                <v-row>
                                    <v-col
                                    cols="12"
                                    >
                                        <v-text-field
                                            v-model="editCategoryName"
                                            label="Category Name"
                                            required
                                            :rules="editCategoryRules"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                    cols="12"
                                    >
                                        <v-radio-group
                                            row
                                            v-model="editCategoryType"
                                            :rules="editCategoryTypeRules"
                                        >
                                            <div
                                                v-for="type in raceTypes"
                                                :key="type"
                                            >
                                                <v-radio
                                                    :label="type"
                                                    :value="type"
                                                ></v-radio>
                                            </div>
                                        </v-radio-group>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>

                        <v-card-actions>
                            <v-btn
                                :disabled="!editvalid"
                                color="orange"
                                @click="editValidate"
                            >
                                Edit
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </transition>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        name: 'Race',
        components: {

        },
        data(){
            return {
                headers : [
                    { text: 'Name', value: 'name' },
                    { text: 'Div', value: 'div' },
                    { text: 'Club', value: 'club' },
                    { text: 'Class', value: 'class' },
                ],
                raceCategories : [
                    // {
                    //     id : 1,
                    //     raceName : "Div 2",
                    //     raceType : "K1",
                    //     paddlers : [
                    //         { 
                    //             name: "Matt Parkes",
                    //             div : 2,
                    //             club : "NCC",
                    //             class : "SM"
                    //         }
                    //     ]
                    // },
                    // {
                    //     id : 2,
                    //     raceName : "Div 2",
                    //     raceType : "K2"
                    // },
                ],
                raceTypes : [ "K1", "K2" ],
                newCategoryName : "",
                newCategoryType : "",
                valid: false,
                newCategoryRules : [
                    v => !!v || 'Category Name is required',
                ],
                newCategoryTypeRules : [
                    v => !!v || 'Category Type is required',
                ],
                editCategoryName : "",
                editCategoryType : "",
                editRaceId : 0,
                editvalid: false,
                editCategoryRules : [
                    v => !!v || 'Category Name is required',
                ],
                editCategoryTypeRules : [
                    v => !!v || 'Category Type is required',
                ],
                isEdit : false
            }
        },
        mounted() {
            if (localStorage.getItem('raceCategories')) {
                try {
                    this.raceCategories = JSON.parse(localStorage.getItem('raceCategories'));
                } catch(e) {
                    localStorage.removeItem('raceCategories');
                }
            }
        },
        methods: {
            validate(){
                if(this.$refs.form.validate()){
                    this.addCategory();
                }
            },
            editValidate(){
                console.log("gekki")
                if(this.$refs.editform.validate()){
                    var name = this.editCategoryName;
                    var type = this.editCategoryType;
                    var id = this.editRaceId;
                    console.log(this.raceCategories)

                    for(var i = 0; i < this.raceCategories.length; i++){
                        var current = this.raceCategories[i];
                        
                        if(current.id == id){
                            this.raceCategories[i].raceName = name;
                            this.raceCategories[i].raceType = type;
                        }
                    }
                }
            },
            addCategory(){
                var name = this.newCategoryName;
                var type = this.newCategoryType;
                var id = this.raceCategories.length + 1;

                this.raceCategories.push({
                    id : id,
                    raceName : name,
                    raceType : type,
                })

                this.$refs.form.reset();
                this.$refs.form.resetValidation();
                console.log("submit")
            },
            triggerEditCategory(category){
                this.isEdit = true;
                this.editCategoryName = category.raceName
                this.editCategoryType = category.raceType
                this.editRaceId = category.id
            }
        },
        watch: {
            raceCategories(newRaceCategories) {
                localStorage.raceCategories = JSON.stringify(newRaceCategories);
            }
        }
    }
</script>

<style scoped>
    .container.fill-height {
        align-items: start;
    }

    .v-card:not(:first-of-type){
        margin: 12px;
    }

    .raceTable {
        padding: 0px 16px;
    }

    .addCategoryForm .col,
    .editCategoryForm .col {
        padding-top: 0px;
        padding-bottom: 0px;
    }

    .addCategoryForm .v-input--selection-controls,
    .editCategoryForm .v-input--selection-controls {
        margin-top: 0px;
    }

    .v-card__title {
        justify-content: space-between;
    }

    .categoryCard .v-btn {
        color: #ffffff;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .options-col {
        position: sticky;
        top: 60px;
    }
</style>
