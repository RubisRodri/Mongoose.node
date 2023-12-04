const express = require('express');
const router = express.Router();
const customHeader = require('../middleware/customHeader');
const { validatorCreateItem } = require('../validator/tracks');
const { getItems, createItems } = require('../controller/tracks');

//Todo http ://localhost//tracks get, post, delete, update
// para que esta forma funcione el nombre del archivo debe ser igual a la familia de ruta

router.get("/", getItems)

//router.get("/:id", getItem)

router.post("/",validatorCreateItem, customHeader, createItems)





module.exports = router