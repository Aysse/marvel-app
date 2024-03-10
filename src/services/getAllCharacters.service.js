import { fetchData } from "../adapters/fetchData.js";
import { buildAuthEndpointParams } from "../helpers/buildEndpoint.js";
import { formatCharacters } from "../helpers/formatCharacters.js";

export default async function getAllCharactersService(baseUrl) {
    const limit = 50;
    const authEndpointParams = buildAuthEndpointParams();
    const endpoint = `${baseUrl}?limit=${limit}&${authEndpointParams}`;
    const characters = await fetchData(endpoint);
    
   return formatCharacters(characters);
}