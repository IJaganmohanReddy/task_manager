const express= require('express')
const app=express();
const tasks=require('./Routes/tasks')
const mongoose=require('mongoose')
require('dotenv').config()
const connectdb= require('./db/connect')
const notFound= require('./middleware/not-found')

// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app. use(bodyParser.urlencoded({ extended: true }) )

//middleware
app.use(express.static('./public'))
app.use(express.json()) // to get json in req.body

//routes
app.get('/hello',(req,res)=>{
    res.end("<h1>This is my Task Manager app !!!</h1>")
})

app.use('/api/v1/tasks',tasks)

app.use(notFound)


const port= process.env.PORT || 3000;

const start= async ()=>{
  try {
      console.log("entered start function...Mongo_URI : "+process.env.MONGO_URI)
      await connectdb(process.env.MONGO_URI)
      app.listen(port, ()=>console.log(`server is listening on port: ${port}...`))

  } catch (error) {
      console.log(error)
  }
}

start()
