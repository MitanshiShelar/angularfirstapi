 const categoryModel= require("../model/categoryModel");




exports.addCategory = (request,response)=>{
    console.log("category");
    console.log(request.body);
    categoryModel.create({
        categoryName : request.body.categoryName,
        categoryImageUrl : "http://localhost:"+ port +"/images/"+request.file.filename
    }).then((result)=>{
        return response.status(201).json({result:result});
    }).catch(err=>{
        return response.status(403).json({error:err});
    });
  }