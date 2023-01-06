import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Resto = db.define('restoran',{
    name:{
        type: DataTypes.STRING
    },
    about:{
        type: DataTypes.STRING
    },
    location:{
        type: DataTypes.STRING
    },
    jarak:{
        type: DataTypes.FLOAT
    },
    rate:{
        type: DataTypes.FLOAT
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

// (async () => {
//     await db.sync();
// })();
 
export default Resto;