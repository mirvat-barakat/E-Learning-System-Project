const Enrollment = require("../models/enrollmentsModel")

exports.enroll = async(req, res)=>{
    const{user_id, course_id}= req.body;

    const alreadyEnrolled = await Enrollment.findOne({ user_id, course_id });

    if (alreadyEnrolled) return res.status(409).json({ message: "Student already enrolled" })

    const enrollment = new Enrollment();
    enrollment.user_id= user_id;
    enrollment.course_id = course_id;
    await enrollment.save();

    res.status(201).json(enrollment);

}