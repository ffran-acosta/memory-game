const {Router} = require("express");
const router = Router();
const controller = require('../controller/memoryGame.controller');

router.get('/', controller.home)
router.get("/exit", controller.exit)

module.exports = router