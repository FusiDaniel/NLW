// server
const express = require("express")
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")

// nunjucks config (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noChace: true
})


server
    // alteracao para o server receber os dados do req.body
    .use(express.urlencoded({ extended:true }))
    // Static files config (cssm scriptsm images)
    .use(express.static("public"))
    // aplication routes
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save.classes", saveClasses)

    .listen(5500)
