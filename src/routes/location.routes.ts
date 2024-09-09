import { Router } from 'express';
import {
    getAllLocations,
    createLocation,
    getLocationById,
    updateLocation,
    deleteLocation,
} from '../controllers/location.controller';

const router = Router();

router.get('/', getAllLocations);
router.post('/', createLocation);
router.get('/:id', getLocationById);
router.put('/:id', updateLocation);
router.delete('/:id', deleteLocation);

export default router;
