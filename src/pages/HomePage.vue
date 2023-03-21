<script>
import axios from 'axios';
import AppAlert from '../components/AppAlert.vue';
const apiBaseUri = 'http://127.0.0.1:8000/api'
export default {
    name: 'HomePage',
    components: { AppAlert },
    data: () => ({
        hasError: false,
        isLoading: false,
        message: '',
        recipes: []
    }),
    methods: {
        fetchRecipe() {
            this.isLoading = true,
                axios.get(apiBaseUri + '/recipes')
                    .then((res) => { this.recipes = res.data; })
                    .catch((err) => {
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
    <app-loader v-if="isLoading"></app-loader>
    <app-alert v-if="hasError" :message="message" type="danger" @close-alert="hasError = false"></app-alert>
    <h1 class="text-warning p-3 title">Le nostre ricette:</h1>
    <div class="row">
        <div v-for="recipe in recipes" :key="recipe.id" class="col-4">
            <div class="card pb-4 border border-2 border-warning" style="width: 18rem; height: 500px;">
                <img :src="recipe.image" class="card-img-top" :alt="recipe.name">
                <div class="card-body">
                    <h5 class="card-title text-warning text-capitalize">{{ recipe.name }} <font-awesome-icon
                            icon="fa-solid fa-bowl-food" class="icon fa-1x" /></h5>
                    <p class="card-text overflow-y-auto">{{ recipe.description }}</p>
                    <router-link :to="{ name: 'recipe-details', params: { id: recipe.id } }"
                        class="btn btn-warning"><font-awesome-icon icon="fa-solid fa-eye" class="icon fa-1x" />
                        Vedi</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-text {
    height: 191px;
}

.title {
    background-color: rgba($color: #000000, $alpha: 0.6);
    text-align: center;
}

.card {
    background-color: rgba($color: #000000, $alpha: 0.6);
    color: white;
}
</style>