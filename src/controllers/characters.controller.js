import getAllCharactersService from '../services/getAllCharacters.service.js';
import getCharactersByNameService from '../services/getCharactersByName.service.js';

export class CharactersController {
  constructor() {
    this.baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  }

  getAllCharacters = async (_req, res) => {
    const response = await getAllCharactersService(this.baseUrl);

    if (response.length > 0) return res.status(200).json(response);
    return res.status(412).send('No characters found');
  };

  getCharactersByName = async (req, res) => {
    const { name } = req.params;
    const response = await getCharactersByNameService(this.baseUrl, name);

    if (response.length > 0) return res.status(200).json(response);
    return res.status(412).send('No characters found by name');
  };
}
