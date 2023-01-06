import express from "express";
 
import { 
    getAllMenu,
    addMenu,
    getMenuById,
    updateMenu,
    deleteMenu
} from "../controllers/MenuController.js";
 
const router = express.Router();
 
router.get('/', getAllMenu);
router.get('/:id', getMenuById);
router.post('/', addMenu);
router.patch('/:id', updateMenu);
router.delete('/:id', deleteMenu);
 
export default router;