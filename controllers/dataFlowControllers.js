// const errorHandler = require("../middelwares/errorMiddleware");
const tempoModel = require("../models/tempoModel");
const errorResponse = require("../utils/errorResponse");
const Users = require("../models/usermodel");
const Tempo = require("../models/tempoModel");
const fs = require('fs');


exports.getFileData = async (req,res,next) =>{
  // const filePath = path.join(__dirname, 'foldername', 'filename.txt');
  const filePath = req.query.address;
  // console.log(filePath);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading file');
    }
    
    // Send the content of the file as the response
    res.send(data);
  });
}

exports.createTempoController = async (req, res, next) => {

  try {
    const newTempo = new Tempo({
      title: req.body.title,
      userId: req.body.userId,
      copyText: req.body.textarea,
    });

    if (req.file) {
      let file = req.file.path.split("\\");
      newTempo.fileData = file[file.length-1];
    }

    const dt = await newTempo.save();
    return res.status(200).json("yes its working ");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getTempoController = async(req,res,next) =>{
  try{
    console.log(req.query.userId);
    console.log("all files is called");
    // res.sendStaus(200).json("yew getting all files");
    const dt = await Tempo.find({ userId: req.query.userId });
    // const fileData = dt.map(data => data.fileData);
    
    // for (let key in fileData) {
    //   if(fileData[key]!==undefined)
      // console.log(key, fileData[key]);
      // try {
      //   const fd= fs.readFileSync(fileData[key], 'utf-8');
      //   console.log(fd);
      // } catch (error) {
      //   console.error(error);
      // }
      
    // }

    // const fd = fs.readFileSync({fileData}, 'utf-8');
    // console.log(fd);
    res.json(dt);
  }
  catch(error)
  {
    console.log(error);
    next(error);
  }
}


exports.downloadTempoController = async(req,res,next) =>{

  try{
    console.log(req.query," yes you reached the download path ");
    // res.download(re);
  }
  catch(error)
  {
    console.log(error);
    next(error);
  }
}

