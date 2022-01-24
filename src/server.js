// data
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "912341234",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1200]
    },
    {
        name: "Bertolomeu Borton",
        avatar: "https://www.vittude.com/blog/wp-content/uploads/otimismo-3.jpg",
        whatsapp: "912341234",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [2],
        time_from: [240],
        time_to: [540]
    },
    {
        name: "yay joberson",
        avatar: "https://www.vittude.com/blog/wp-content/uploads/otimismo-3.jpg",
        whatsapp: "912341234",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [2],
        time_from: [240],
        time_to: [540]
    }
]

const subjects = [
    "Artes",
    "Ciências",
    "Biologia",
    "Física",
    "Educação física",
    "História",
    "Geografia",
    "Português",
    "Matemática",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// functions

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })  // Aqui eu coloco todos os arquivos que eu vou usar nessa pagina
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = (Object.keys(data).length != 0)

    if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html")
}

// server
const express = require("express")
const server = express()

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
