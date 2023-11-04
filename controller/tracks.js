const mongoose = require("mongoose");
const { tracksModel } = require("../models");

const getItems = async (req, res) => {
    const data = await tracksModel.find({})
    res.send({data})
};

const createItems = async(req, res) => {
    const { body } = req;
     const data = await tracksModel.create(body)
     res.send({data})
};

const updateItems = (req, res) => {}

const deleteItems = (req, res) => {}



module.exports = { getItems, createItems};