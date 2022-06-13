const mongoose=require('mongoose')

const task_Scheme= new mongoose.Schema({
       name: {
              type:String,
              required: [true,'must provide name'],
              trim: true,
              maxlength:[20,'max size is 20 chars']
       },
       completed:{
              type:Boolean,
              default: false
       }
});



const tasks=mongoose.model('task',task_Scheme)

module.exports= tasks;