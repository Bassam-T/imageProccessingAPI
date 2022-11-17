import { Request, Response } from 'express';
import readImage from '../functions/readImage';
import path from 'path';
import resizeImage from '../functions/resizeImage';

const isResizedImageExist = async (req: Request, res: Response) => {
  const { width, heigth, filename } = req.query;
  const imageRoute = `./images/${filename}.jpg`;
  const outputImagePath = `./thumbnails/${filename}-${width}-${heigth}.jpg`;
  const imageWidth: number = parseFloat(width as string);
  const imageHeigth: number = parseFloat(heigth as string);

  if (await readImage(outputImagePath)) {
    res.type('.jpg');
    res.sendFile(path.resolve(outputImagePath));
  } else {
    await resizeImage(imageRoute, outputImagePath, imageWidth, imageHeigth);
    res.type('.jpg');
    res.sendFile(path.resolve(outputImagePath));
  }
};

export default isResizedImageExist;