const API_KEY = '7035c60c';
const API_END_POINT = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchItems = async (movieName, pageNumber) => {
  try {
    const res = await fetch(
      `${API_END_POINT}&s=${movieName}&page=${pageNumber}`
    );
    if (!res.ok) {
      throw new Error('API 요청 실패');
    }

    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
