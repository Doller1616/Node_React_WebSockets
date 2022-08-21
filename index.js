const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs/promises');
const app = express();

async function initialization(){
   const uploadFolder = path.join(__dirname,'uploads');
   return await fs.mkdir(uploadFolder, { recursive: true });
}

// ------Upload File With Multer ---------------------------------------
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'));
     },
    filename: function (req, file, cb) {
        console.log("file", file);
        const [,ext]  = file.mimetype.split('/');
        const fileName = `${file.fieldname + new Date().getTime()}.${ext}`;
        cb(null , fileName);
    }
});
const upload = multer({ storage: storage });
//--------------------------------------------------------------------------------

app.use(express.static(path.join(__dirname, 'uploads')))

mongoose.connect('mongodb+srv://ajay...', (err)=>{
    if(!err) { 
        console.log("DB Connected Successfully");
    }
})

app.post('/image',upload.array('profiles', 4),(req, res)=> {
   const urls = req.files.map((obj)=> `localhost:1616/${obj.filename}`) 

    res.send(urls)
})


app.listen(1616,async()=>{
  console.log("Server Started At port 1616");
// ----  Create Folder through File System ---------------------------------------
  const dirCreation =  await initialization();
  console.log("Folder Created at : ",dirCreation);
})


