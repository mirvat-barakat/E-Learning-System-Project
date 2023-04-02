const Course= require("../models/coursesModel");

exports.addClass= async(req, res)=>{
    const{name, description}= req.body;

    const alreadyExist = await Course.findOne({ name, description });

    if(alreadyExist) return res.status(409).json({message:"Course already exist."})

    const course = new Course();
    course.name= name;
    course.description= description;
     
    await course.save();
    res.status(201).json({message:"Course is added successfully."})
}

exports.getAllCourses= async(req, res)=>{
    const courses= await Course.find();

    res.json(courses)
}

