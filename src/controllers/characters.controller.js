import { fetchData } from '../adapters/fetchData.js';
import { buildAuthEndpointParams } from '../helpers/buildEndpoint.js';
import { formatCharacters } from '../helpers/formatCharacters.js';

export class CharactersController {
  constructor() {
    this.baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  }

  getAllCharacters = async (_req, res) => {
    const limit = 50;
    const authEndpointParams = buildAuthEndpointParams();
    const endpoint = `${this.baseUrl}?limit=${limit}&${authEndpointParams}`;
    const characters = await fetchData(endpoint);
    
    const formattedResponse = formatCharacters(characters);
    return res.json(formattedResponse);
  };
}
