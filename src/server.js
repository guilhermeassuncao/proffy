//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configura Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio da Configuração do Servidor
server
    //Receber os dados do req.body
    .use(express.urlencoded({
        extended: true
    }))
    //Configura Arquivos Estáticos (Css, Scripts e Imagens)
    .use(express.static('public'))
    //Rotas da Aplicação
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post('/save-classes', saveClasses)
    .listen((process.env.PORT || 8080))
