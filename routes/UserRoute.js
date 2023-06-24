import express from "express";
import {
    Login, Register, getUsersById, getUsers, Logout
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js"

const router = express.Router();

router.get('/', verifyToken, getUsers);
router.get('/:id', getUsersById);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 



export default router;