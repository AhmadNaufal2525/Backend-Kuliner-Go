import express from "express";
 
import { 
    getAllBooking,
    addBooked,
    getBookedById,
    updateBooked,
    deleteBooked
} from "../controllers/BookingController.js";
 
const router = express.Router();
 
router.get('/', getAllBooking);
router.get('/:id', getBookedById);
router.post('/Add', addBooked);
router.patch('/:id', updateBooked);
router.delete('/:id', deleteBooked);
 
export default router;