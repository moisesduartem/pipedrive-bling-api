import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
  path: `environments/.env.${process.env.NODE_ENV.trim()}`,
});

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello!',
  });
});

const server = app.listen(process.env.APP_PORT);

export { app, server };
