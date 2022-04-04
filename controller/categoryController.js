 const categoryModel= require("../model/categoryModel");




exports.addCategory = (request,response)=>{
    // console.log("category");
    console.log(request.body.categoryName);
    console.log(request.file.filename);
    categoryModel.create({
         categoryName : request.body.categoryName,
         categoryImageUrl : "https://angular-first-api-backend.herokuapp.com"+request.file.filename
    }).then((result)=>{
        return response.status(201).json(result);
    }).catch(err=>{
        return response.status(500).json({error:"internal server error"});
    });
  }

  exports.viewCategory=(request,response)=>{
  categoryModel.find()
  .then(result=>{
      return response.status(200).json(result);
  }).catch(err=>{
      return response.status(500).json(err);
  })
  }