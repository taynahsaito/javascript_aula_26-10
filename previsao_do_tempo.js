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
const minhaPromise = axios.get(url)
minhaPromise.then((res) => {
    console.log(res)
})