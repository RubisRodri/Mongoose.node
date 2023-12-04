const customHeader = ( req, res, next) => {
   try {

    const api_key = req.headers.api_key;
    if(api_key === 'leifer-01') {
    
    next()
    }else{
        res.status(403)
        res.send({error:'Api_key_no_es_correcta '})
    }
   } catch (error) {
        res.status(403)
        res.send({error:"algo_ocurrio_en_el_ custom_header"})

   }
}

// este es in midellware custom, que lee las cabeceras
module.exports  = customHeader;