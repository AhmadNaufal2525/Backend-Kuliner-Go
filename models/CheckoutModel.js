import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Check = db.define('checkout',{
    name:{
        type: DataTypes.STRING
    },
    quantity:{
        type: DataTypes.INTEGER
    },
    price:{
        type: DataTypes.INTEGER
    },
    total:{
        type: DataTypes.INTEGER
    },
    image:{
        type: DataTypes.STRING
    },
    url:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Check;

