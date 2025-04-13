import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

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
    create_at: {
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

export default Order;