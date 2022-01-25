import bodyParser from 'body-parser'
import express, { NextFunction, Request, Response } from 'express';
import path from "path";
import fs from "fs";
import { fileExisits, sharpResize } from '../../utilities';

const imageRoutes = express.Router();
imageRoutes.use(bodyParser.json())

imageRoutes.get('/resize', async (req: Request, res: Response, next: NextFunction) => {
    const { filename, height, width } = req.query;
    const w: number | null = height ? parseInt(width as string, 10) : null;
    const h: number | null = width ? parseInt(width as string, 10) : null;
    const f: string = filename as unknown as string;
    try {
        const imagePath = `${f}${w}x${h}.jpg`;
        console.log('imagePath', imagePath);
        const resizePath = `./public/${f}${w}x${h}.jpg`;
        const imagePathExists = await fileExisits(path.join("public", imagePath));
        console.log('imagePathExists', imagePathExists);
        if (imagePathExists) {
            res.sendFile(`/${imagePath}`, { root: path.join("./public") });
        } else {
            const response = await sharpResize(f, h, w);
            response.toFile(resizePath, (error: Error) => {
                if (error) {
                    res.status(403).send({
                        ok: "failed",
                        message: error.message,
                    });
                } else {
                    res.sendFile(`/${imagePath}`, { root: path.join("./public") });
                }
            });
        }
    } catch (error) {
        console.log(e);
    }
});

export default imageRoutes;
