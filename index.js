import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import restoRoute from "./routes/restoRoute.js";
import menuRoute from "./routes/menuRoute.js"
import adminRoute from "./routes/AdminRoute.js"
import bookingRoute from "./routes/bookingRoute.js"
dotenv.config();
const app = express();
app.use(cors({ credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use(FileUpload());
app.use(express.static("public"));
app.use('/users',UserRoute);
app.use('/resto', restoRoute);
app.use('/menu',menuRoute);
app.use('/admin',adminRoute);
app.use('/booking',bookingRoute)
app.listen(5000, ()=> console.log('Server up and running in port 5000'));