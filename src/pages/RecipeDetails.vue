<script>
import axios from 'axios';
const apiBaseUrl = 'http://127.0.0.1:8000/api';
export default {
    name: 'RecipeDetailsPage',
    data: () => ({
        isLoading: false,
        hasError: false,
        message: '',
        recipe: [],
    }),
    methods: {
        fetchRecipe(endpoint = null) {
            this.isLoading = true;

            if (!endpoint) endpoint = apiBaseUrl + '/recipes/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.recipe = res.data;
            }).catch((err) => {
                this.message = err.message;
                this.hasError = true;
            }).then(() => {
                this.isLoading = false;
            });
        }
    },
    created() {
        this.fetchRecipe();
    }

}
</script>

<template>
    <app-alert v-if="hasError" @close-alert="hasError = false" type="danger" :message="message"></app-alert>
    <app-loader v-if="isLoading"></app-loader>
    <section id="recipe-detail" class="border border-warning rounded text-white p-3">
        <!-- <h1 class="text-center my-5">{{ recipe.name.toUpperCase() }}</h1> -->
        <h1 class="text-center text-warning my-5"><font-awesome-icon icon="fa-solid fa-bowl-food" class="icon fa-1x" />
            Carbonara</h1>
        <div class="row">
            <div class="col-6">
                <figure>
                    <!-- <img :src="recipe.image" class="img-fluid" :alt="recipe.name"> -->
                    <img src="https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/03/Carbonara-ricetta-5328.jpg"
                        alt="carbonara" class="img-fluid">
                </figure>
            </div>
            <div class="col-6">
                <h3 class="text-warning"><font-awesome-icon icon="fa-solid fa-book" class="icon " /> Descrizione:</h3>
                <!-- <p class="card-text card-description">{{ recipe.description }}</p> -->

                <p class="card-text card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim
                    earum deserunt rerum voluptates odio nulla, architecto ex ratione modi nisi omnis perferendis facere
                    reprehenderit recusandae! Nostrum, sint fuga. Cumque!</p>
                <h3 class="text-warning"><font-awesome-icon icon="fa-solid fa-egg" class="icon " /> Ingredienti:
                </h3>
                <ul>
                    <li>Uova</li>
                    <li>Pecorino</li>
                    <li>Guanciale</li>
                    <li>Pasta</li>

                </ul>


            </div>

            <div class="col-12 d-flex justify-content-between">
                <div class="d-flex justify-content-between align-items-center">

                    <div> <font-awesome-icon icon="fa-solid fa-person" class="icon fa-2x me-2 text-warning ms-5" /> 3 </div>
                    <div><font-awesome-icon icon="fa-solid fa-clock"
                            class="icon fa-2x me-2 text-warning ms-5" /><span>30min</span>
                    </div>
                </div>
                <router-link :to="{ name: 'home' }" class="btn btn-warning"><font-awesome-icon
                        icon="fa-solid fa-rotate-left" class="icon fa-1x" /> Back</router-link>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#recipe-detail {
    background-color: rgba($color: #000000, $alpha: 0.6);
}
</style>