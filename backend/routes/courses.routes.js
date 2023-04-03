const {Router}=require("express");
const router= Router();

const{addClass, getAllCourses} = require("../controllers/auth.controllers")

router.post("/add_class", addClass);
router.get("/get_courses", getAllCourses);

module.exports = router;