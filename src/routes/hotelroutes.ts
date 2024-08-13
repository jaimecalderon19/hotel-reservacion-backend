import express from 'express';
import { hotelController } from '../controllers/hotelController';
import { authMiddleware } from '../middleware/auht';

const router = express.Router();

router.post('/', authMiddleware, hotelController.createHotel);
router.get('/', hotelController.getAllHotels);
router.get('/:id', authMiddleware, hotelController.getHotelById);
router.put('/:id', authMiddleware, hotelController.updateHotel);
router.delete('/:id', authMiddleware, hotelController.deleteHotel);

export default router;