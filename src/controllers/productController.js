import productModel from "../models/productModel.js";

async function getById(req, res) {
    const id = req.params.id;

    const product = productModel.findByPk(id);
    res.json(product);
}

export default {
    getById
}