const mongoose= require('mongoose')

//const connectionString= 'mongodb+srv://Jaganmohan:1234@node-express-project-ta.hbhabhu.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

const conncetDB= (url)=>{
    console.log("inside connect.js")
  return mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})  
}


module.exports= conncetDB
