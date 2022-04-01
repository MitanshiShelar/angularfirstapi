const userModel=require("../model/userModel");
const jwt=require("jsonwebtoken");

exports.signUp=(request,response)=>{
    console.log(request.body)
  userModel.create(request.body)
  .then(result=>{
    return response.status(201).json({result:result});
  })
  .catch(err=>{
    return response.status(500).json({error : err});
  });
}



exports.signIn=(request,response)=>{
    console.log(request.body);
    let email=request.body.email;
    let password= request.body.password;
    userModel.findOne({email:email,password:password})
    .then((result)=>{
      if(result){
        let payload={subject:result._id};
        let token =jwt.sign(payload,"technology");
        return response.status(200). json({
          status:"login success",
          current_username:result,
          token:token
        });
      }
    })
    .catch((err)=>{
        return response.status(500).json({error : err});
    })
    
}