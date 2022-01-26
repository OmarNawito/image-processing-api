import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import path from 'path';
import { fileExisits, sharpResize } from '../../utilities';

const imageRoutes = express.Router();
imageRoutes.use(bodyParser.json());

imageRoutes.get('/resize', async (req: Request, res: Response) => {
  const { filename, height, width } = req.query;
  const w: number | null = width ? parseInt(width as string, 10) : null;
  const h: number | null = height ? parseInt(height as string, 10) : null;
  const f: string = filename as unknown as string;
  try {
    if(w === null || h === null || f === null) {
      console.log('error');
      return res.send('no params')
    }
    if (Number.isNaN(w) || w < 1) {
      return res.send("Please provide a positive numerical value for the 'width' query segment.");
    }
    if (Number.isNaN(h) || h < 1) {
      return res.send("Please provide a positive numerical value for the 'height' query segment.");
    }
    const imagePath = `${f}${w}x${h}.jpg`;
    const resizePath = `./public/${f}${w}x${h}.jpg`;
    const imagePathExists = await fileExisits(path.join('public', imagePath));
    if (imagePathExists) {
      res.sendFile(`/${imagePath}`, { root: path.join('./public') });
    } else {
      const response = await sharpResize(f, h, w);
      response.toFile(resizePath, (error: Error) => {
        if (error) {
          res.status(403).send({
            ok: 'failed',
            message: error.message
          });
        } else {
          res.sendFile(`/${imagePath}`, { root: path.join('./public') });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default imageRoutes;
