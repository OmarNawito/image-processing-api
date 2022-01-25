import express, { Request, Response, Application } from 'express';
import routes from './routes';
import cors from "cors";

const app: Application = express();
const port = 3000;

app.use(express.static("public"));

app.use(cors());

app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.get('/', async (_req: Request, res: Response): Promise<void> => {
  res.status(200).send('Image processing started');
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
