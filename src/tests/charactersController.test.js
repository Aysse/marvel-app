import { fetchData } from '../adapters/fetchData.js';
import allCharacters from './mocks/allCharacters.js';
import responseAllCharacters from './mocks/responseAllCharacters.js';
import charactersByName from './mocks/charactersByName.js';
import responseCharactersByName from './mocks/responseCharactersByName.js';
import responseCharacterById from './mocks/responseCharacterById.js';
import getCharactersService from '../services/getCharacters.service.js';
import getCharacterByIdService from '../services/getCharacterById.service.js';
import characterById from './mocks/characterById.js';
import comicById from './mocks/comicById.js';

jest.mock('../adapters/fetchData.js', () => ({
  fetchData: jest.fn(),
}));

describe('Character services', () => {
  test('getAllCharacters should return formatted response', async () => {
    fetchData.mockImplementation(() => Promise.resolve(allCharacters));

    const response = await getCharactersService('MOCK_BASE_URL', { limit: 50 });

    expect(response).toStrictEqual(responseAllCharacters);
  });
  test('getCharactersByName should return formatted response', async () => {
    fetchData.mockImplementation(() => Promise.resolve(charactersByName));

    const response = await getCharactersService('MOCK_BASE_URL', { name: 'spider' });

    expect(response).toStrictEqual(responseCharactersByName);
  });
  test('getCharacterById should return formatted response', async () => {
    fetchData.mockResolvedValueOnce(characterById);
    fetchData.mockResolvedValueOnce(comicById);

    const response = await getCharacterByIdService({ 
      baseUrl: 'MOCK_BASE_URL', 
      id: 1010354, 
      params: { limit: 20, orderBy: 'onsaleDate' } 
    });

    expect(response).toStrictEqual(responseCharacterById);
  });
});
