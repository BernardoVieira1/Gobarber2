import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();


routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'bernardo vieira',
    email: 'bernardo30@gmail.com',
    password_hash: '1231653214',
  });
  return res.json(user);
});


/*
routes.get('/', async (req,res) =>{
  const user = await User.create({
    name: 'Bernardo José',
    email: 'Bernardovieira50@gmail.com',
    password_hash: '123456794561',
  });

  return res.json(user);
})
*/

export default routes;
