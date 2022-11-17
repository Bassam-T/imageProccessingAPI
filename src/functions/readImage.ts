import sharp from 'sharp';
//check if an image exist it will return true,else it will return false
const readImage = async (imagePath: string) => {
  try {
    const metadata = await sharp(imagePath).metadata();
    return !!metadata;
  } catch (err) {
    return false;
  }
};

export default readImage;