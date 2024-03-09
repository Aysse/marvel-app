import { fetchData } from '../adapters/fetchData.js';
import { buildAuthEndpointParams } from '../helpers/buildEndpoint.js';
import { formatCharacters } from '../helpers/formatCharacters.js';

export class CharactersController {
  constructor() {
    this.baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  }

  getAllCharacters = async (_req, res) => {
    const authEndpointParams = buildAuthEndpointParams();
    const endpoint = `${this.baseUrl}?limit=50&${authEndpointParams}`;
    const characters = await fetchData(endpoint);
    
    const formattedResponse = formatCharacters(characters);
    console.log('formattedResponse:', formattedResponse)
    res.json(formattedResponse);
  };
}
