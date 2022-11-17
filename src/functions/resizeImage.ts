import sharp from 'sharp';
//it will read the image in the inputpath and resize it in the outputPath according to the new width and heigth
const resizeImage = async (
  inputPath: string,
  outputPath: string,
  imageWidth: number,
  imageHeigth: number
) => {
  try {
    await sharp(inputPath)
      .resize({
        width: imageWidth,
        height: imageHeigth,
      })
      .toFile(outputPath);
    return true;
  } catch (err) {
    return false;
  }
};
export default resizeImage;
