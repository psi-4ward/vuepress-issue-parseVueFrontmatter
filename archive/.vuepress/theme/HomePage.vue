<template>
    <div>
        <div
            v-for="(page, index) in pages"
            :key="index"
        >
            {{ page.title }}
        </div>
    </div>
</template>

<script>
import { isVisiblePost } from "./utils"

export default {
    name: "HomePage",
    computed: {
        pages() {
            let pages = this.$site.pages.filter(isVisiblePost)
            pages.sort((page1, page2) => {
                if (page1.frontmatter.date < page2.frontmatter.date) {
                    return 1
                } else {
                    return -1
                }
            })
            return pages
        },
    },
    methods: {
        isVisiblePost: isVisiblePost,
    },
}
</script>

<style scoped lang="scss">
</style>
