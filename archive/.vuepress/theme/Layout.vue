<template>
    <div id="root">
        <main>
            <HomePage v-if="isHomePage()" />
            <PostPage v-else />
        </main>
        <div>
            <pre>debug info:</pre>
            <pre>this.$site: {{ JSON.stringify(this.$site, null, 4)}}</pre>
            <pre>this.$page: {{ JSON.stringify(this.$page, null, 4)}}</pre>
        </div>
    </div>
</template>

<script>
import HomePage from "./HomePage.vue"
import PostPage from "./PostPage.vue"

export default {
    name: "layout",
    components: { HomePage, PostPage },
    methods: {
        isHomePage: function() {
            return this.$page.path === this.$site.base
        },
    },
}
</script>

<style lang="scss">
</style>
