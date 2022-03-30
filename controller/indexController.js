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

exports.signIn=(request,response)=>{
    console.log(request.body);
    let email=request.body.email;
    let password= request.body.password;
    userModel.findOne({email:email,password:password})
    .then((result)=>{
        return response.status(200). json({result});
    })
    .catch((err)=>{
        return response.status(500).json({msg:"something went wrong"});
    })
    
}