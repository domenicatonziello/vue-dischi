<script>
import AppAlert from '../components/AppAlert.vue';
export default {
    name: 'HomePage',
    components: { AppAlert },
    data: () => ({
        hasError: false,
    })
}
</script>

<template>
    <app-alert v-if="hasError" message="errore" type="danger"></app-alert>
    <h1>Home Page</h1>
</template>

<style lang="scss" scoped></style>