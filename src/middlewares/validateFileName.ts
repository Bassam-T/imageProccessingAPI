import { Request, Response, NextFunction } from 'express';
import readImage from '../functions/readImage';

const validateFileName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filename } = req.query;
  const imageRoute = `./images/${filename}.jpg`;
  if (await readImage(imageRoute)) {
    next();
  } else {
    return res.status(400).send('the image is not Exist');
  }
};

export default validateFileName;
