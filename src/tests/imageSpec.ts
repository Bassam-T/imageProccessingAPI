import resizeImage from "../functions/resizeImage";
describe('test the image processing function', () => {
    it('resizeImage function return true', async() => {
        const isResized:boolean = await
            resizeImage(
                './images/encenadaport.jpg',
                './thumbnails/encenadaport-test.jpg',
                200,
                200
            );

        expect(isResized).toBe(true);
      });
  });