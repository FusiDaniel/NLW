// server
const express = require("express")
const server = express()

const { pageLanding, pageStudy, pageGiveClasses } = require("./pages")

// nunjucks config (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noChace: true
})


server
    // Static files config (cssm scriptsm images)
    .use(express.static("public"))
    // aplication routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500)
