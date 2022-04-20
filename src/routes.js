import { Router } from 'express';

import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);



/*
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'bernardo vieira',
    email: 'bernardo30@gmail.com',
    password_hash: '1231653214',
  });
  return res.json(user);
});
*/

export default routes;
