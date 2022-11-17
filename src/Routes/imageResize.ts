import express from 'express';
import validateWidthAndHeigth from '../middlewares/validateWidthAndHeigth';
import validateFileName from '../middlewares/validateFileName';
import checkDir from '../middlewares/checkDir';
import isResizedImageExist from '../middlewares/isResizedImageExist';

const imageResize = express.Router();

const middelwares = [
  validateWidthAndHeigth,
  validateFileName,
  checkDir,
  isResizedImageExist
];

imageResize.get('/imageResize', middelwares);

export default imageResize;