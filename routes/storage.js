const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { createItems } = require("../controller/storage");
//todo http://localhost:3000/api/storage 



router.post("/", uploadMiddleware.single("myfile"), createItems);

module.exports = router;