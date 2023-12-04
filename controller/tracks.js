const { tracksModel } = require("../models");

const getItems = async (req, res) => {


    try {
        const data = await tracksModel.find({})
        res.send({data})
        
    } catch (error) {
        handleHttpError(res, 'Error_get_items')
    }
};

const createItems = async(req, res) => {
    try {
        
        const { body } = req;
         const data = await tracksModel.create(body)
         res.send({data})
    } catch (error) {
        handleHttpError(res, 'Error_creando')
    }


};

const updateItems = (req, res) => {}

const deleteItems = (req, res) => {}



module.exports = { getItems, createItems};