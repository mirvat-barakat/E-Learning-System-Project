const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json())


const authRouter = require("./routes/auth.routes")
app.use('/auth', authRouter)

const enrollmentRouter = require("./routes/enrollment.routes")
app.use('/enrollment', enrollmentRouter)

const filesRouter = require("./routes/files.routes")
app.use('/files', filesRouter)

const coursesRouter = require("./routes/courses.routes")
app.use('/courses', coursesRouter)


app.listen(process.env.PORT, (err) => {
    if (err) console.error(err)
    console.log("Server is running on port ", process.env.PORT);
    require("./configs/db.config")
  });