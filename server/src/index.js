import express, { json } from 'express';
import cors from 'cors';
import { CharactersController } from './controllers/characters.controller.js';

const app = express();
app.use(json());
app.disable('x-powered-by');
app.use(cors());

const charactersController = new CharactersController();
app.get('/characters', charactersController.getAllCharacters);
app.get('/characters/:name', charactersController.getCharactersByName);
app.get('/characters/id/:id', charactersController.getCharacterById);

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  console.log('Running in development mode');
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
