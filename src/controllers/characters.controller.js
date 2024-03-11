import getCharacterByIdService from '../services/getCharacterById.service.js';
import getCharactersService from '../services/getCharacters.service.js';

export class CharactersController {
  constructor () {
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

  getCharacterById = async (req, res) => {
    const { id } = req.params;
    const params = { limit: 20, orderBy: 'onsaleDate' };
    const response = await getCharacterByIdService({
      baseUrl: this.baseUrl,
      id,
      params
    });

    if (response && Object.keys(response).length > 0) { return res.status(200).json(response); }
    return res.status(412).send('No character found by id');
  };
}
