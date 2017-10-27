require('dotenv').config()
const express =require('express')
    ,bodyParser=require('body-parser')
    ,cors=require('cors')
    ,massive=require('massive')
    ,app=express()

    ,PORT=8080


    app.use(bodyParser.json())
    app.use(cors())





app.listen(PORT,()=>console.log(`Listening on port: ${PORT}`));