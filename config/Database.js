import { Sequelize } from "sequelize";
 
const db = new Sequelize('kuliner_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

console.log("Database Connected!")
export default db;