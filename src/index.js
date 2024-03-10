import express, { json } from 'express';
import { CharactersController } from './controllers/characters.controller.js';

const app = express();
app.use(json());
app.disable('x-powered-by');

const charactersController = new CharactersController();
app.get('/characters', charactersController.getAllCharacters);
app.get('/characters/:name', charactersController.getCharactersByName);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
