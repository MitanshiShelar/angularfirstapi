const express= require("express");
var router = express.Router();
const categoryController=require("../controller/categoryController");

const multer = require("multer");
var storage = multer.diskStorage({
    destination:'public/images',
    filename:function(request,file,cb){
        cb(null , Date.now()+"-"+file.originalname);
    }
});
var upload=multer({storage: storage});

router.post("/add",upload.single("categoryImageUrl"),categoryController.addCategory);



module.exports= router;