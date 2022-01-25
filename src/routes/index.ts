import express, { Request, Response } from 'express';
import imageRoutes from './image';

//import route from express router
const routes = express.Router();

//define the root for the imported todoRoutes
//now to access todoRoutes root route you need to access /api/todos 
routes.use('/img', imageRoutes);

routes.get('/', (_req: Request, res: Response): void => {
    res.send('API route');
});
export default routes;