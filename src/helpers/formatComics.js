export function formatComics(data) {
    if (!data || !data.data || !data.data.results) return [];

    return data.data.results.map(comic => {
        return {
            id: comic.id,
            title: comic.title,
            description: comic.description,
            image: {
                path: comic.thumbnail.path,
                extension: comic.thumbnail.extension
            }
        }
    })
}