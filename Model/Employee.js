const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    
    name :{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
    age:{
        type:String,
        required:true  
    },
    country:{
        type:String,
        required:true  
    },
    email:{
        type:String,
        required:true  
    },
    mobile:{
        type:String,
        required:true  
    },

})

const Employee =mongoose.model('employee',employeeSchema,'employeeCollection');
module.exports= Employee;