import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Admin = db.define('admin',{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Admin;
// (async () => {
//     await db.sync();
// })();