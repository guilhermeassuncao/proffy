//Dados
const proffys = [{
        name: 'Diego Fernandes',
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
        whatsapp: '11994944125',
        bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        subject: 'Química',
        cost: '40',
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: 'Guilherme Assunção',
        avatar: 'https://avatars3.githubusercontent.com/u/67649872?s=460&u=7a2cd8baa79d05e75da03d45e2f94594d577d599&v=4',
        whatsapp: '11994944125',
        bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        subject: 'Química',
        cost: '40',
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: 'Letícia Assunção',
        avatar: 'https://scontent.fvix6-1.fna.fbcdn.net/v/t1.0-9/37940053_10213745972102258_707935349115977728_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=1KoJiLf83VQAX-w5JPA&_nc_ht=scontent.fvix6-1.fna&oh=92e833f5a60e74c904cb000981e26529&oe=5F557F1D',
        whatsapp: '11994944125',
        bio: 'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        subject: 'Química',
        cost: '40',
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação Física',
    'Física',
    'Geografia',
    'História',
    'Português',
    'Química'
]

const weekdays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
]

//Funcionalidades
function getSubject(subjectNumber) {
    const position = subjectNumber-1;
    return subjects[position]
}
function pageLanding(req, res) {
    return res.render('index.html')
}
function pageStudy(req, res) {
    const filters = req.query;
    return res.render('study.html', { proffys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
    const data = req.query;

    const isNotEmpty = Object.keys(data).length > 0;

    if (isNotEmpty) {
        data.subject = getSubject(data.subject);
        proffys.push(data);
        return res.redirect('/study');
    }
    return res.render('give-classes.html', {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

//Configura Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio da Configuração do Servidor
server
//Configura Arquivos Estáticos (Css, Scripts e Imagens)
.use(express.static('public'))
//Rotas da Aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.listen(5500);