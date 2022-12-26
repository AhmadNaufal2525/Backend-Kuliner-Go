import { Sequelize } from "sequelize";
 
const db = new Sequelize('kuliner_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;