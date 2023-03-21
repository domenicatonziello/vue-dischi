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
            // this.loading = true;

            if (!endpoint) endpoint = apiBaseUrl + '/recipes/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.recipe = res.data;
            }).catch((err) => {
                this.message = err.message;
                this.hasError = true;
            }).then(() => {
                this.Isloading = false;
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
    <app-loader v-if="loading"></app-loader>
    <section id="recipe-detail" class="border border-warning rounded  p-3">
        <!-- <h1 class="text-center my-5">{{ recipe.name.toUpperCase() }}</h1> -->
        <h1 class="text-center text-warning my-5"><font-awesome-icon icon="fa-solid fa-bowl-food" class="icon fa-1x" />
            Carbonara</h1>
        <div class="row row-cols-2">
            <div class="col-6">
                <figure>
                    <!-- <img :src="recipe.image" class="img-fluid" :alt="recipe.name"> -->
                    <img src="https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/03/Carbonara-ricetta-5328.jpg"
                        alt="carbonara" class="img-fluid">
                </figure>
            </div>
            <div class="col-6">
                <!-- <p class="card-text card-description">{{ recipe.description }}</p> -->
                <p class="card-text card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim
                    earum deserunt rerum voluptates odio nulla, architecto ex ratione modi nisi omnis perferendis facere
                    reprehenderit recusandae! Nostrum, sint fuga. Cumque!</p>
            </div>

            <div class="col-4">
                <font-awesome-icon icon="fa-solid fa-person" class="icon fa-1x" /> 3
            </div>
            <div class="col-12 d-flex justify-content-end">
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