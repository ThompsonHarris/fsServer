const apiRouter = require('express').Router()
const fs = require('fs')
const path = require('path')

const readFilePromise = (file) => new Promise((res,rej)=>{
    fs.readFile(path.join(__dirname,`../${file}`),(err,data)=>{
      res(data.toString())
    })
})


apiRouter.get('/', (req,res,next)=>{
  readFilePromise('../database/database.txt')
  .then((data)=>{
    res.send({data:data})
  })
})



module.exports = apiRouter