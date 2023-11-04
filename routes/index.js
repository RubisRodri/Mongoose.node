const express = require('express');
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;//RUTA ABSOLUTA

const removeExtencion = (fileName) => {
    return fileName.split('.').shift() //Elimina la extension del archivo
}
// cargar las rutas dinamicamente
fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtencion(file)
    if(name !== 'index'){
        router.use(`/${name}`, require(`./${file}`))// http://localhost:3001/api/tracks
    }

})




module.exports = router