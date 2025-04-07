import { DataTypes } from "sequelize";
import connection from "../config/sequalize.js";


const Order = connection.define("order", {
    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    },
    user_id: {
        //to connect with user in the future
    },
    take_away: {
        type: DataTypes.INTEGER.UNSIGNED
    }
});

export default Order;