import express from "express";
import {
    Login, Register, getUsersById, getUsers
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUsersById);
router.post('/register', Register);
router.post('/login', Login);



export default router;