export function formatCharacters (data) {
    if (!data || !data.data || !data.data.results) return [];

    return data.data.results.map(character => {
        return {
            id: character.id,
            name: character.name,
            description: character.description,
            image: `${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`,
            // comics: character.comics.items,
        };
    });
}