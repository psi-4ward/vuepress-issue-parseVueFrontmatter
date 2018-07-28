function isVisiblePost (page) {
    // not blog posts
    if (["/", "/about.html"].includes(page.path)) {
        return false
    }

    return true
}

export { isVisiblePost }