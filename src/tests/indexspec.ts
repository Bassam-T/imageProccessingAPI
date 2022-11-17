//End Point Testing......
import supertest from 'supertest';
import app from '../app';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('Get The Root EndPoint Which is 404 Not Found', async () => {
    const response = await request.get('/testing');
    expect(response.status).toBe(404);
  });   
});

describe('Testing The EndPoint With Every Prams ==> Right', () => {
  it('return 200 Because Width is Right , Height is Right , And File name is Available ', async () => {
    const response = await request.get(
      '/imageResize/?width=300&heigth=200&filename=fjord'
    );
    expect(response.status).toBe(200);
  });
});

describe('Testing The EndPoint With One or More Params ==> Wrong', () => {
  it('Return 400 With An Error Message ', async () => {
    const response = await request.get(
      '/imageResize/?width=test&heigth=200&filename=jford'
    );
    expect(response.status).toBe(400);
  });
});

describe('It Return 404 With Json Message For Wrong EndPoint', () => {
  it('return 404 Endpoint Not Available', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(404);
  });
});