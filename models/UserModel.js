import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
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

export default User;
// (async () => {
//     await db.sync();
// })();