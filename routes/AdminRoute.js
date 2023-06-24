import express from "express";
import {
    Login, Register, Logout, getAdminById, getAdmin
} from "../controllers/AdminController.js";

const router = express.Router();

router.get('/',  getAdmin);
router.get('/:id', getAdminById);
router.post('/register', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
 



export default router;