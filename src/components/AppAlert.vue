<script>
export default {
    name: 'AppAlert',
    props: {
        message: String,
        type: String
    },
    data: () => ({}),
    emits: ['close-alert']
}
</script>

<template>
    <div class="alert  alert-dismissible fade show container mt-5" :class="`alert-${type}`" role="alert">
        <strong>Error!</strong> {{ message }}
        <button type="button" class="btn-close" @click="$emit('close-alert')"></button>
    </div>
</template>

<style lang="scss" scoped></style>