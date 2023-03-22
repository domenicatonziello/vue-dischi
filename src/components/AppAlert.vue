<script>
export default {
    name: 'AppAlert',
    props: {
        type: String
    },
    data: () => ({}),
    emits: ['close-alert']
}
</script>

<template>
    <div class="alert  alert-dismissible fade show container mt-5" :class="`alert-${type}`" role="alert">
        <slot></slot>
        <button type="button" class="btn-close" @click="$emit('close-alert')"></button>
    </div>
</template>

<style lang="scss" scoped></style>