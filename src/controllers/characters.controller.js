import getCharactersService from '../services/getCharacters.service.js';

export class CharactersController {
  constructor() {
    this.baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  }

  getAllCharacters = async (_req, res) => {
    const params = { limit: 50 };
    const response = await getCharactersService(this.baseUrl, params);

    if (response.length > 0) return res.status(200).json(response);
    return res.status(412).send('No characters found');
  };

  getCharactersByName = async (req, res) => {
    const { name } = req.params;
    const params = { nameStartsWith: name };
    const response = await getCharactersService(this.baseUrl, params);

    if (response.length > 0) return res.status(200).json(response);
    return res.status(412).send('No characters found by name');
  };
}
