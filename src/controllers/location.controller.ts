import { Request, Response } from 'express';
import Location from '../models/location.model';

export const getAllLocations = async (req: Request, res: Response) => {
    try {
        const locations: any[] = await Location.findAll();
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching locations', error });
    }
};

export const createLocation = async (req: Request, res: Response) => {
    try {
        const { name, longitude, latitude } = req.body;
        const location = await Location.create({ name, longitude, latitude });
        res.status(201).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Error creating location', error });
    }
};

export const getLocationById = async (req: Request, res: Response) => {
    try {
        const location = await Location.findByPk(req.params.id);
        if (location) {
            res.status(200).json(location);
        } else {
            res.status(404).json({ message: 'Location not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching location', error });
    }
};

export const updateLocation = async (req: Request, res: Response) => {
    try {
        const { name, longitude, latitude } = req.body;
        const location = await Location.findByPk(req.params.id);
        if (location) {
            location.name = name;
            location.longitude = longitude;
            location.latitude = latitude;
            await location.save();
            res.status(200).json(location);
        } else {
            res.status(404).json({ message: 'Location not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating location', error });
    }
};

export const deleteLocation = async (req: Request, res: Response) => {
    try {
        const location = await Location.findByPk(req.params.id);
        if (location) {
            await location.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Location not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting location', error });
    }
};
