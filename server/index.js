const express = require('express')
const path = require('path')
const chalk = require('chalk')
const apiRouter = require('./api')

const app = express()

const PORT =  process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api/data', apiRouter)

app.listen(PORT, ()=>{
  console.log(chalk.bgCyanBright(`server is running on ${PORT}`))
})