import productModel from "../models/product.js";

async function getByID(req,res){
    const id = req.params.id;
    const product = await productModel.findByPk(id,{
        include: []
    });
    res.json(product);
}

export default{
    getByID
}