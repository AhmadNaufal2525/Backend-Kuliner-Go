import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Booked = db.define('booking',{
    firstname: {
        type: DataTypes.STRING,
       
    },
    lastname: {
        type: DataTypes.STRING,
        
    },
    email: {
        type: DataTypes.STRING,
        
    },
    date: {
        type: DataTypes.STRING,
        
    },
    address: {
        type: DataTypes.STRING,
        
    },
    people: {
        type: DataTypes.STRING,
        
    },
    payment: {
        type: DataTypes.STRING,
       
    },
},{
    freezeTableName:true
});

export default Booked;
// (async () => {
//     await db.sync();
// })();