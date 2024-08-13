import { Request, Response } from 'express';
import Review from '../models/reviewModel';

export const reviewController = {
  // Crear una nueva reseña
  createReview: async (req: Request, res: Response) => {
    try {
      const newReview = new Review(req.body);
      const savedReview = await newReview.save();
      res.status(201).json(savedReview);
    } catch (error) {
      res.status(400).json({ message: "Error creating review", error });
    }
  },

  // Obtener todas las reseñas de un hotel
  getReviewsByHotel: async (req: Request, res: Response) => {
    try {
      const reviews = await Review.find({ hotel: req.params.hotelId }).populate('user');
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ message: "Error fetching reviews", error });
    }
  },

  // Obtener una reseña por ID
  getReviewById: async (req: Request, res: Response) => {
    try {
      const review = await Review.findById(req.params.id).populate('user hotel');
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json(review);
    } catch (error) {
      res.status(400).json({ message: "Error fetching review", error });
    }
  },

  // Actualizar una reseña
  updateReview: async (req: Request, res: Response) => {
    try {
      const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedReview) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json(updatedReview);
    } catch (error) {
      res.status(400).json({ message: "Error updating review", error });
    }
  },

  // Eliminar una reseña
  deleteReview: async (req: Request, res: Response) => {
    try {
      const deletedReview = await Review.findByIdAndDelete(req.params.id);
      if (!deletedReview) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: "Error deleting review", error });
    }
  }
};