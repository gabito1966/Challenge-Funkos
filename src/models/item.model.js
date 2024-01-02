const { DataTypes} = require("sequelize");
const sequelize = require('../config/conn');

const item = sequelize.define('item', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dues: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img_front: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_back: {
        type: DataTypes.STRING,
        allowNull: false
    },
    create_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
});