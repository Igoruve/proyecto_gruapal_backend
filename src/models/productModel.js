import  { DataTypes } from 'sequelize';
import connection from '../config/sequelize.js';

const Product = connection.define('product', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    type: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    stock: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        unique: true    
    },
    description: {
        type: DataTypes.STRING(250)
    }
});

export default Product;