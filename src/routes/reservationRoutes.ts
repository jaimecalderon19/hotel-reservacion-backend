import express from 'express';
import { reservationController } from '../controllers/reservationController';
import { authMiddleware } from '../middleware/auht';

const router = express.Router();

router.post('/', authMiddleware,  reservationController.createReservation);
router.get('/',  authMiddleware, reservationController.getAllReservations);
router.get('/:id',  authMiddleware, reservationController.getReservationById);
router.put('/:id',  authMiddleware, reservationController.updateReservation);
router.patch('/:id/cancel',  authMiddleware, reservationController.cancelReservation);

export default router;