const Employee = require('../Model/Employee');
const Joi = require('joi');

///////// create movie ///////////////////
exports.postemployee = async (req,res,next)=>{
    //joi validate schema
        const schema = Joi.object({
        name: Joi.string().min(1).max(30).required(),
        age: Joi.string().required(),
        country: Joi.string().required(),
        email: Joi.string().required(),
        mobile: Joi.string().required(),
        
    })
    // joi validate input data
    var {error} = await schema.validate(req.body);
    if(error){
        return res.status(400).send({msg:error.details[0].message})
    }
    res.json('success')
    
    ////////////////// save data in mongodb using mongoose //////////////
    const employee = new Employee({ 
        name: req.body.name,
        age: req.body.age, 
        country: req.body.country, 
        email: req.body.email, 
        mobile: req.body.mobile 
    })
    try{
    var response=await employee.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}

///////////////// get movie //////////////////
exports.getemployee  = async (req,res,next)=>{
    const response = await Employee.find();
    res.send(response);
}
 
////////// update theatre name & address ///////////////
exports.updateemployee  = async (req,res,next)=>{
    const {employeeID} = req.params;   // object destructure
    const response = await Employee.findByIdAndUpdate(employeeID,{
        name: req.body.name,
        age: req.body.age, 
        country: req.body.country, 
        email: req.body.email, 
        mobile: req.body.mobile 
    });
    res.send(response);  
}

////////// delete theatre ///////////////
exports.deleteemployee = async (req,res,next)=>{  
    const {employeeID} = req.params;   // object destructure
    const response = await Employee.findByIdAndRemove(employeeID)
    res.send(response);
}