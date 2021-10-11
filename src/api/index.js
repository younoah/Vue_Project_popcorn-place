const BASE_URL = 'https://www.omdbapi.com';

const option = {
  get: () => ({
    headers: {
      // 'Content-Type': 'application/json',
    },
  }),
  post: contents => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contents),
  }),
};

const request = async (url, option = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, option);

    if (!response.ok) {
      throw new Error(response.status);
    }

    return await response.json();
  } catch (error) {
    alert(`💣 API Request Error - ${error} 💣`);
  }
};

export const API = {
  getMovies: (keyword, pageNumber = 1) => {
    return request(
      `?apikey=7035c60c&s=${keyword}&page=${pageNumber}`,
      option.get()
    );
  },
  getMovieDetail: id => {
    return request(`?apikey=7035c60c&i=${id}&plot=plot`, option.get());
  },
};
