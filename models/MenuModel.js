import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Menu = db.define('menu',{
    name:{
        type: DataTypes.STRING
    },
    price:{
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
 
export default Menu;

(async () => {
    await db.sync();
})();