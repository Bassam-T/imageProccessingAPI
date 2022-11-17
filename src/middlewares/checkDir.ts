import { promises as fs } from 'fs';
import { Request, Response, NextFunction } from 'express';

//checking if the folder exist, the function will return false,else it will create it and return true;
const checkDir = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await fs.mkdir('thumbnails');
    next();
  } catch (err) {
    next();
  }
};

export default checkDir;
