import express from 'express';
import imageResize from './Routes/imageResize';
const app = express();
const port = 3000;

app.use('/', imageResize);

app.listen(port, () => {
  console.log(`server is Running in http://127.0.0.1:${port}`);
});

export default app;