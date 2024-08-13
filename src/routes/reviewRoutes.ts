import express from 'express';
import { reviewController } from '../controllers/reviewController';
import { authMiddleware } from '../middleware/auht';

const router = express.Router();

router.post('/', authMiddleware, reviewController.createReview);
router.get('/hotel/:hotelId', authMiddleware, reviewController.getReviewsByHotel);
router.get('/:id', authMiddleware, reviewController.getReviewById);
router.put('/:id', authMiddleware, reviewController.updateReview);
router.delete('/:id', authMiddleware, reviewController.deleteReview);

export default router;