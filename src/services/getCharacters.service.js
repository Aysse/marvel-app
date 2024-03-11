import { fetchData } from '../adapters/fetchData.js';
import { buildAuthEndpointParams } from '../helpers/buildEndpoint.js';
import { formatCharacters } from '../helpers/formatCharacters.js';
import { params2str } from '../helpers/params2str.js';

export default async function getCharactersService (baseUrl, params) {
  const paramsStr = params2str(params);

  const authEndpointParams = buildAuthEndpointParams();
  const endpoint = `${baseUrl}?${paramsStr}&${authEndpointParams}`;
  const characters = await fetchData(endpoint);

  return formatCharacters({ data: characters });
}
