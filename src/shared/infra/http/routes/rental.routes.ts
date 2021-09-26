import { Router } from 'express';

import { CreateRentalsController } from '@modules/rentals/useCases/createRental/CreateRentalsController';
import { DevolutionRentalController } from '@modules/rentals/useCases/devolutionRental/DevolutionRentalController';

import { ensureAuthenticated } from '../middlewares/EnsureAuthenticated';

const rentalRoutes = Router();

const createRentalController = new CreateRentalsController();
const devolutionRentalController = new DevolutionRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);
rentalRoutes.post('/devolution/:id', ensureAuthenticated, devolutionRentalController.handle);

export { rentalRoutes };
