const File= require("../models/filesModel");

exports.uploadFile= async(req, res)=>{
    const{name, content}=req.body;

    const file = new File();
    file.name=name;
    file.content=content;

    await file.save();

    res.status(201).json({message:"File uploaded successfuly.",
                          response: file
                        });
}