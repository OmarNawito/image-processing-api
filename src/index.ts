import express, { Request, Response, Application } from 'express';
import routes from './routes';

const app: Application = express();
const port = 3000;

app.use('/api', routes);

app.get('/', async (_req: Request, res: Response): Promise<void> => {
  res.send('Image processing started');
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
