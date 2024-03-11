import { fetchData } from '../adapters/fetchData.js';
import { buildAuthEndpointParams } from '../helpers/buildEndpoint.js';
import { formatCharacters } from '../helpers/formatCharacters.js';
import { formatComics } from '../helpers/formatComics.js';
import { params2str } from '../helpers/params2str.js';

export default async function getCharacterByIdService ({
  baseUrl,
  id,
  params = null
}) {
  const paramsStr = params ? params2str(params) : '';
  const authEndpointParams = buildAuthEndpointParams();
  const characterEndpoint = `${baseUrl}/${id}?${authEndpointParams}`;
  const comicCollectionEndpoint = `${baseUrl}/${id}/comics?${paramsStr}&${authEndpointParams}`;

  const [character, comics] = await Promise.all([
    fetchData(characterEndpoint),
    fetchData(comicCollectionEndpoint)
  ]);

  const formattedComics = formatComics(comics);

  return formatCharacters({
    data: character,
    isMultiple: false,
    comics: formattedComics
  });
}
