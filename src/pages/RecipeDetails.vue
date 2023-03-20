<script>
import AppLoader from '../components/AppLoader.vue';
export default {
    name: 'RecipeDetailsPage',
    data: () => ({
        isLoading: false,
    }),
    components: { AppLoader }
}
</script>

<template>
    <app-loader></app-loader>
    <h1>Dettaglio</h1>
</template>

<style lang="scss" scoped></style>