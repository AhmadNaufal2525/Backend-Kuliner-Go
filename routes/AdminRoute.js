import express from "express";
import {
    Login, getAdmin, Register, getAdminById
} from "../controllers/AdminController.js";

const router = express.Router();

router.get('/', getAdmin);
router.get('/:id', getAdminById);
router.post('/register', Register);
router.post('/login', Login);



export default router;