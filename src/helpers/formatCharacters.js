export function formatCharacters ({ data, isMultiple = true, comics = [] }) {
  if (!data || !data.data || !data.data.results) {
    if (isMultiple) return [];
    else return null;
  }

  const dataFormatted = data.data.results.map((character) => {
    const characterData = {
      id: character.id,
      name: character.name,
      description: character.description,
      image: {
        path: character.thumbnail.path,
        extension: character.thumbnail.extension
      }
    };
    if (!isMultiple) characterData.comics = comics;
    return characterData;
  });
  return isMultiple ? dataFormatted : dataFormatted[0];
}
