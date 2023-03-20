<script>
export default {
    name: 'AppAlert',
    props: {
        message: String,
        type: String
    },
    data: () => ({})
}
</script>

<template>
    <div class="alert my-3" :class="`alert-${type}`" role="alert">
        {{ message }}
    </div>
</template>

<style lang="scss" scoped></style>