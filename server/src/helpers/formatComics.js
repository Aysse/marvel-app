export function formatComics (data) {
  if (!data || !data.data || !data.data.results) return [];

  return data.data.results.map((comic) => {
    const onSaleDateObj = comic.dates.find((date) => date.type === 'onsaleDate');
    const onSaleDate = onSaleDateObj ? new Date(onSaleDateObj.date) : '';
    const onSaleYear = onSaleDate ? onSaleDate.getFullYear() : '';
    return {
      id: comic.id,
      title: comic.title,
      description: comic.description,
      year: onSaleYear,
      image: {
        path: comic.thumbnail.path,
        extension: comic.thumbnail.extension
      }
    };
  });
}
