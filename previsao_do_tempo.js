//dotenv
require('dotenv').config()
const axios = require('axios')

// const APPID = process.env.APPID
// const Q = process.env.Q
// const UNTS = process.env.UNITS
// const LANGUAGE = process.env.LANGUAGE
// const CNT = process.env.CNT
// const PROTOCOL = process.env.PROTOCOL
// const URL_BASE = process.env.URL_BASE

// //operador de desestruturação javascript - isso substitui o bloco de código anterior
const {
    APPID,
    Q,
    UNITS,
    LANGUAGE,
    CNT,
    PROTOCOL,
    URL_BASE
} = process.env

//https://api.openweathermap.org/data/2.5/forecast?q=Itu&units=metric&appid=chave&lang=pt-br&cnt=10
const url = `${PROTOCOL}://${URL_BASE}?q=${Q}&units=${UNITS}&appid=${APPID}&lang=${LANGUAGE}&cnt=${CNT}`

//devolve uma promise

//encadeamento de promises
const minhaPromise = axios.get(url)
minhaPromise
.then((res) => {
    console.log("Quem é o rest.data...")
    console.log(res.data)
    console.log("*******************************")
    return res.data
})
.then((res) => {
    console.log("quem é o cnt....")
    console.log(res.cnt)
    console.log("*******************************")
    return res
})
.then((res) => {
    console.log("Quem é o list....")
    console.log(res.list)
    console.log("*******************************")
    return res.list
})
.then((res) => {
    console.log("Qual é a temperatura minima da primeira previsão de tempo...")
    console.log("A temperatura minima é " + res[0]["main"]["temp_min"])
    return res
})
.then((res) => {
    //iterar sobre a coleçao de previsoes, exibindo a temperatura minima, maxima, umidade relativa do ar, descrição de cada previsão
    //for...
})