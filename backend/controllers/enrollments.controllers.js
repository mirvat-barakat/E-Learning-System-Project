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

exports.getStudentsByCourseId = async(req, res)=>{
    const enrollments= await Enrollment.find({course_id: req.params.id}).populate("user_id", "name email").select("-_id user_id");
    const students = enrollments.map((enrollment) => enrollment.student_id);

    res.json(students)
}

