const {Router}=require("express");
const router= Router();

const{uploadFile} = require("../controllers/files.controllers")

router.post("/upload", uploadFile);

module.exports = router;