const jwt = require('jsonwebtoken');
exports.verifyToken = (request,response,next)=>{
    try {
        console.log("token:" +request.headers.authorization);
        if(!request.headers.authorization)
        return response.status(401).send("unauthorized request");

        if(request.headers.authorization==null)
        return response.status(401).send("unauthorized request");

        let token= request.headers.authorization.split("")[1];

        let payload = jwt.verify(token,"technology");

        console.log(payload);
        next();
    } catch (error) {
        return response.status(401).send("unauthorized request");
         
    }
}