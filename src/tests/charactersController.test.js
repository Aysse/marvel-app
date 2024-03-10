import { CharactersController } from '../controllers/characters.controller.js';
import allCharacters from './mocks/allCharacters.js';
import responseAllCharacters from './mocks/responseAllCharacters.js';
import { fetchData } from '../adapters/fetchData.js';

jest.mock('../adapters/fetchData.js', () => ({
  fetchData: jest.fn(),
}));

describe('CharactersController', () => {
  test('getAllCharacters should return formatted response', async () => {
    fetchData.mockImplementation(() => Promise.resolve(allCharacters));
    const charactersController = new CharactersController();
   
    const mockRes = {
      json: jest.fn(),
    };

    await charactersController.getAllCharacters(null, mockRes);
    const jsonResponse = mockRes.json.mock.calls[0][0];

    expect(jsonResponse).toStrictEqual(responseAllCharacters);
  });
});
