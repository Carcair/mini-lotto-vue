<template>
    <div class="btn" v-on:click="changePath(path)" v-animate-css.hover="'pulse'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'HomeBtn',
    props: ['path'],
    methods: {
        changePath() {
            this.$router.push(this.path);
        }
    }
}
</script>

<style scoped>
    .btn {
        background: #C1839F;
        width: 60vh; height: 10vh;
        margin-top: 5vh;
        display: grid;
        font-size: 5vh;
        line-height: 10vh;
        border-radius: 2vh;
        transition: background 2s;
    }
    .btn:hover {
        background: #F5F5F5;
    }
</style>