import bodyParser from 'body-parser'
import express, { NextFunction, Request, Response } from 'express';
import path from "path";
import fs from "fs";
import { fileExisits } from '../../utilities';

const imageRoutes = express.Router();
imageRoutes.use(bodyParser.json())

imageRoutes.get('/resize', async(req: Request, res: Response, next: NextFunction) => {
    const {h, w, filename} = req.query;
    console.log('h', h);
    console.log('w', w);
    const width: number | null = w ? parseInt(w as string, 10): null;
    const height: number | null = h ? parseInt(h as string, 10): null;
    const f: string = filename as unknown as string;
    console.log('f', f);

    try {
        const imagePath = `${f}${w}x${h}.jpg`;
        console.log('imagePath', imagePath);
        const resizePath = `./public/${f}${w}x${h}.jpg`;
        const imagePathExists = await fileExisits(path.join("public", imagePath));
        console.log('imagePathExists', imagePathExists);
        if(imagePathExists) {
            res.sendFile(`/${imagePath}`, { root: path.join("./public") });
        }else {
            
        }
    } catch (error) {
        
    }
});

export default imageRoutes;
