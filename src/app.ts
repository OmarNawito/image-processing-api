import express, { Request, Response, Application } from 'express';
import routes from './routes';
import cors from 'cors';

const app: Application = express();

app.use(express.static('public'));

app.use(cors());

app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.get('/', (_req: Request, res: Response): void => {
  res.status(200).send('Image processing started');
});

export default app;