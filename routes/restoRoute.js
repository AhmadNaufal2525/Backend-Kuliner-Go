import express from "express";
 
import { 
    getAllResto,
    addResto,
    getRestoById,
    updateResto,
    deleteResto
} from "../controllers/RestoController.js";
 
const router = express.Router();
 
router.get('/', getAllResto);
router.get('/:id', getRestoById);
router.post('/', addResto);
router.patch('/:id', updateResto);
router.delete('/:id', deleteResto);
 
export default router;
