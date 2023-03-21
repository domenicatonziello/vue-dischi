<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'Boolcettario',
  components: { AppHeader }
}
</script>

<template>
  <AppHeader />
  <div class="container">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style></style>