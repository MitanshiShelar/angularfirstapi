var express = require('express');
var router = express.Router();
const indexController= require("../controller/indexController.js")


router.post("/signup",indexController.signUp);


module.exports = router;
