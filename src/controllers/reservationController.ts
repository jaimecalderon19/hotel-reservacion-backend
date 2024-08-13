import { Request, Response } from 'express';
import Reservation from '../models/reservationModel';

export const reservationController = {
  // Crear una nueva reservación
  createReservation: async (req: Request, res: Response) => {
    try {
      const newReservation = new Reservation(req.body);
      const savedReservation = await newReservation.save();
      res.status(201).json(savedReservation);
    } catch (error) {
      res.status(400).json({ message: "Error creating reservation", error });
    }
  },

  // Obtener todas las reservaciones
  getAllReservations: async (req: Request, res: Response) => {
    try {
      const reservations = await Reservation.find().populate('user hotel');
      res.status(200).json(reservations);
    } catch (error) {
      res.status(400).json({ message: "Error fetching reservations", error });
    }
  },

  // Obtener una reservación por ID
  getReservationById: async (req: Request, res: Response) => {
    try {
      const reservation = await Reservation.findById(req.params.id).populate('user hotel');
      if (!reservation) {
        return res.status(404).json({ message: "Reservation not found" });
      }
      res.status(200).json(reservation);
    } catch (error) {
      res.status(400).json({ message: "Error fetching reservation", error });
    }
  },

  // Actualizar una reservación
  updateReservation: async (req: Request, res: Response) => {
    try {
      const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedReservation) {
        return res.status(404).json({ message: "Reservation not found" });
      }
      res.status(200).json(updatedReservation);
    } catch (error) {
      res.status(400).json({ message: "Error updating reservation", error });
    }
  },

  // Cancelar una reservación
  cancelReservation: async (req: Request, res: Response) => {
    try {
      const cancelledReservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        { status: 'cancelled' },
        { new: true }
      );
      if (!cancelledReservation) {
        return res.status(404).json({ message: "Reservation not found" });
      }
      res.status(200).json({ message: "Reservation cancelled successfully", reservation: cancelledReservation });
    } catch (error) {
      res.status(400).json({ message: "Error cancelling reservation", error });
    }
  }
};