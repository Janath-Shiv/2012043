const router = require("express").Router();
const {register,authentication} = require('../controller/controller1');
router.route("/register").post(register);
router.route("/auth").post(authentication);



module.exports = router
