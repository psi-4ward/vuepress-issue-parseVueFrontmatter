const path = require("path")

const modulesPath = path.join(__dirname, "..", "..", "node_modules")
console.log("modulesPath:", modulesPath)

module.exports = {
    title: "-",
    description: "-",
    base: "/",
    dest: "dist",
    serviceWorker: true,
    scss: {
        includePaths: [modulesPath],
    },
    sass: {
        includePaths: [modulesPath],
    },
}
