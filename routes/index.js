var express = require('express');
var router = express.Router();
const indexController= require("../controller/indexController.js")

router.get("/",(request,response)=>{
    response.send("sdjhkdjf");
})
router.post("/signup",indexController.signUp);
router.post("/signin",indexController.signIn)



module.exports = router;
