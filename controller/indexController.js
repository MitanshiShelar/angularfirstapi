const userModel=require("../model/userModel");

exports.signUp=(request,response)=>{
    console.log(request.body)
  userModel.create(request.body)
  .then(result=>{
    return response.status(201).json(result);
  })
  .catch(err=>{
    return response.status(500).json({msg:"server problem"});
  });
}
