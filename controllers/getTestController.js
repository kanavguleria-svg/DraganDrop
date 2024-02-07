const { JsonWebTokenError } = require("jsonwebtoken");
const Student = require("../models/studentModel");

exports.getTest = (req,res,next) =>{
    console.log("hello this get test");
    res.send("hello this gettest in test route");
}

exports.createStudentController = async(req,res,next) =>{
    try{   
        const stu = req.body;
        // console.log(req.body);
        // console.log(stu);
        const newStudent = new Student(stu);
        await newStudent.save();
        res.send(req.body);
        next();
    } catch(e){
        console.error(e);
    } finally{
        console.log("student is save in db");
    }
    
}

exports.getAllStudentController = async(req,res,next) =>{
    try{
        // console.log(req.body);
        const stu = await Student.find({});
        console.log(stu);
        res.send(stu);
        next();
    }
    catch(e)
    {
        console.log(e);
    }
    finally{
        // console.log("all the students are returned in a list");
    }
}

exports.getOneStudentController = async(req,res,next) =>{
    try{
        console.log(req.body);
        const stu = await Student.findOne({name:req.body.name});
        console.log(stu);
        res.send(stu);
    }
    catch(e)
    {
        console.log(e);
    }
    finally{
        console.log("all the students are returned in a list");
    }
}

exports.updateStudentController = async(req,res,next) =>{
    try{
        // const k = findByIdAndUpdate(req._id,{name:"kanav guleria"});
        const stu = await Student.findById(req._id);
        stu.name = req.name;
        await stu.save();
        
    }catch(e){
        console.error(e);
    }
    finally{
        console.log("student is updated");
    }
}

exports.deleteStudentController = async(req,res,next) =>{
    try{
        const doc = await student.findById(req.id);
        if(doc)
        {

        }   
        

    }catch{

    }finally{

    }

}