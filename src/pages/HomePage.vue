<script>
import axios from 'axios';
import AppAlert from '../components/AppAlert.vue';
const apiBaseUri = 'http://127.0.0.1:8000/api'
export default {
    name: 'HomePage',
    components: { AppAlert },
    data: () => ({
        hasError: true,
        isLoading: false,
        recipes: []
    }),
    methods: {
        fetchRecipe() {
            this.isLoading = true,
                axios.get(apiBaseUri + '/recipes')
                    .then((res) => { this.recipes = res.data; })
                    .catch((err) => {
                        console.error(err);
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
    <app-alert v-if="hasError" message="errore" type="danger" @close-alert="hasError = false"></app-alert>
    <h1>Le nostre ricette:</h1>
    <!-- <div v-for="recipe in recipes" :key="recipe.id" class="card" style="width: 18rem;">
                                                    <img :src="recipe.image" class="card-img-top" :alt="recipe.name">
                                                    <div class="card-body">
                                                        <h5 class="card-title">{{ recipe.name }}</h5>
                                                        <p class="card-text">{{ recipe.description }}</p>
                                                        <router-link :to="{ name: 'recipe-details', params : {id: recipe.id} }" class="btn btn-primary">Vedi</router-link>
                                                    </div>
                                                </div> -->
    <div class="card" style="width: 18rem;">
        <img src="https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/03/Carbonara-ricetta-5328.jpg"
            class="card-img-top" alt="carbonara">
        <div class="card-body">
            <h5 class="card-title">Carbonara</h5>
            <p class="card-text">Descrizione</p>
            <router-link :to="{
                name: 'recipe-details', params: { id: 1 }
            }" class="btn btn-primary">Vedi</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>