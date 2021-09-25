import { Router } from 'express';

import { CreateRentalsController } from '@modules/rentals/useCases/createRental/CreateRentalsController';

import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated';

const rentalRoutes = Router();

const createRentalController = new CreateRentalsController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);

export { rentalRoutes };
