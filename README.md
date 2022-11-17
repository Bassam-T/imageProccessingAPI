# Udacity: Build An Image Proccessing API

This is a backend API build in Nodejs to resize an image 

## Installation Instructions
This section contains all the packages used in this project and how to install them. However, you can fork this repo and run the following command at the root directory to install all packages.

`yarn` or `npm install`

### Packages

Here are some of the few packages that were installed.

#### express
`npm i -S express`
`npm i -D @types/express`

#### typescript
`npm i -D typescript`

#### jasmine
`npm install jasmine @types/jasmine @ert78gb/jasmine-ts ts-node --save-dev`

#### supertest
`npm i supertest`
`npm i --save-dev @types/supertest`

### sharp
`npm i sharp`
`npm i --save-dev @types/sharp`

## Start App
- `npm run start` : to start the server
- `npm run build`: to compile .ts files to js Files in the build folder
- `npm run lint`: to run eslint 
- `npm run prettier` to run prettier 
- `npm run test` to run jasmine testing
---
- URL for test in the server: http://127.0.0.1:3000/imageResize/?width=300&heigth=300&filename=fjord
#### Queries:
- width: should be a number
- height: should be a number
- filename: an image file that exist in the images forlder
---