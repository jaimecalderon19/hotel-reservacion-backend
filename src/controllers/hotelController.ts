import { Request, Response } from 'express';
import Hotel from '../models/hotelModel';

export const hotelController = {
  // Crear un nuevo hotel
  createHotel: async (req: Request, res: Response) => {
    try {
      const newHotel = new Hotel(req.body);
      const savedHotel = await newHotel.save();
      res.status(201).json(savedHotel);
    } catch (error) {
      res.status(400).json({ message: "Error creating hotel", error });
    }
  },

  // Obtener todos los hoteles
  getAllHotels: async (req: Request, res: Response) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      res.status(400).json({ message: "Error fetching hotels", error });
    }
  },

  // Obtener un hotel por ID
  getHotelById: async (req: Request, res: Response) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      if (!hotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }
      res.status(200).json(hotel);
    } catch (error) {
      res.status(400).json({ message: "Error fetching hotel", error });
    }
  },

  // Actualizar un hotel
  updateHotel: async (req: Request, res: Response) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedHotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }
      res.status(200).json(updatedHotel);
    } catch (error) {
      res.status(400).json({ message: "Error updating hotel", error });
    }
  },

  // Eliminar un hotel
  deleteHotel: async (req: Request, res: Response) => {
    try {
      const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
      if (!deletedHotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }
      res.status(200).json({ message: "Hotel deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: "Error deleting hotel", error });
    }
  }
};