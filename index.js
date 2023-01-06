import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import restoRoute from "./routes/restoRoute.js";
import menuRoute from "./routes/menuRoute.js"
import adminRoute from "./routes/AdminRoute.js"
const app = express();
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use('/users',UserRoute);
app.use('/resto', restoRoute);
app.use('/menu',menuRoute);
app.use('/admin',adminRoute);
app.listen(5000, ()=> console.log('Server up and running in port 5000'));