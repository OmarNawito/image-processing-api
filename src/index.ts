import express, {Request, Response, Application} from 'express'

const app: Application = express();
const port: number = 3000;

app.get('/', async (_req: Request, res: Response): Promise<void> => {
    res.send('Image processing started');
}
);

app.listen(port, () => {
    console.log(`server started on port: ${port}`);
})