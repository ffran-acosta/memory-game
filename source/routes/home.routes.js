const {Router} = require("express");
const router = Router();
const controller = require('../controller/home');

router.get('/', controller.home)

module.exports = router