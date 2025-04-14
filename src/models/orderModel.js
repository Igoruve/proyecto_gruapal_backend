import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import Product from "./productModel.js"

const Order = connection.define("order", {
    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false,
    },
    take_away: {
        type: DataTypes.BOOLEAN
    },
});

Order.belongsToMany(Product, { through: 'order_has_product', foreignKey: "order_id" });
Product.belongsToMany(Order, { through: 'order_has_product', foreignKey: "product_id" });

export default Order;