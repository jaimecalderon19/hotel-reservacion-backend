import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola mundo con Express y TypeScript!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});