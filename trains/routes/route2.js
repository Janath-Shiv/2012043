const router = require("express").Router();
const {getAll,train,getOne} = require('../controller/controller2');
router.route("/trains").get(getAll);
router.route("/trains").post(train);
router.route("/:id").get(getOne);


module.exports = router
