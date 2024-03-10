import getAllCharactersService from '../services/getAllCharacters.service.js';
import getCharactersByNameService from '../services/getCharactersByName.service.js';
import { fetchData } from '../adapters/fetchData.js';
import allCharacters from './mocks/allCharacters.js';
import responseAllCharacters from './mocks/responseAllCharacters.js';
import charactersByName from './mocks/charactersByName.js';
import responseCharactersByName from './mocks/responseCharactersByName.js';

jest.mock('../adapters/fetchData.js', () => ({
  fetchData: jest.fn(),
}));

describe('Character services', () => {
  test('getAllCharacters should return formatted response', async () => {
    fetchData.mockImplementation(() => Promise.resolve(allCharacters));

    const response = await getAllCharactersService('MOCK_BASE_URL');

    expect(response).toStrictEqual(responseAllCharacters);
  });
});
