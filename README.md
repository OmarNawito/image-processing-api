# image-processing-api

Simple Node API for resizing images using Sharp

Express

TypeScript

Jasmine for testing

## How to build and start the server
The project can be built and run in the following ways
### 1. Install all dependencies 
`npm install`

### 2. Build
`npm run build`

### 3. Start the Server
`npm start`

This command will start the server running on port `3000`.  `http://localhost:3000`

## Testing and Linting
Here, I will show you how to run the test and also how to check that our code respects all the eslint rules.

### 1. Linting
`npm run lint`

### 2. Testing
`npm run test`

## Endpoints and Functionality. 
This project defines two endpoint. 

### 1. Homepage endpoint
`http://localhost:3000`

### 2. Resize endpoint
`http://localhost:3000/api/img/resize?width=<width>&height=<height>&filename=<filename>`

Using the endpoint above, we can provide our width and height value that we want our images to be resized. Check the example below

`http://localhost:3000/api/img/resize?width=500&height=400&filename=test`


This endpoint is used to resize all images found in the `public/images/full` directory and saving them in the `public/` directory. 