import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

//import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileContoller';
import ProviderController from './app/controllers/ProviderController';


import authMiddlewares from './app/middlewares/auth'
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';


const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewares);

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);

routes.get('/schedule', ScheduleController.index);

routes.get('/providers', ProviderController.index);
routes.post('/files', upload.single('file'), FileController.store);



routes.put('/users', UserController.update);



export default routes;
