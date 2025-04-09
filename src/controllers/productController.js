import productModel from "../models/productModel.js";

async function getById(req, res) {
    const id = req.params.id;

    const product = productModel.findByPk(id);
    if (!product){
        res.status(404).json({message: "product not found"});
    }
    res.status(200).json(product);
}

export default {
    getById
};