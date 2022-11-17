import { Request, Response, NextFunction } from 'express';

const validateWidthAndHeigth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { width, heigth } = req.query;
  const imageWidth: number = parseFloat(width as string);
  const imageHeigth: number = parseFloat(heigth as string);

  if (isNaN(imageWidth) || isNaN(imageHeigth)) {
    return res
      .status(400)
      .send('width and heigth is required and should be a numbers');
  } else {
    next();
  }
};
export default validateWidthAndHeigth;
