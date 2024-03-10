import { fetchData } from "../adapters/fetchData.js";
import { buildAuthEndpointParams } from "../helpers/buildEndpoint.js";
import { formatCharacters } from "../helpers/formatCharacters.js";

export default async function getCharactersByNameService(baseUrl, name) {
    const authEndpointParams = buildAuthEndpointParams();
    const endpoint = `${baseUrl}?nameStartsWith=${name}&${authEndpointParams}`;
    const characters = await fetchData(endpoint);
    
    return formatCharacters(characters);
}