import type { MovieSearchResponse, MovieDetailResponse } from "@/types/movie";

const API_KEY = process.env.VUE_APP_API_KEY;
const API_END_POINT = process.env.VUE_APP_API_END_POINT;

export const BASE_URL = `${API_END_POINT}/?apikey=${API_KEY}`;

const request: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`요청 실패: ${response.status}`);
  }
  return response;
};

class MovieService {
  static instance: InstanceType<typeof MovieService> | null = null;

  static getInstance(): InstanceType<typeof MovieService> {
    if (MovieService.instance === null) {
      MovieService.instance = new MovieService();
    }
    return MovieService.instance;
  }

  getSearchResult(term: string, page: number): Promise<MovieSearchResponse> {
    const path = `${BASE_URL}&s=${term}&page=${page}`;
    return request(path).then((res) => res.json());
  }

  getMovieDetail(imdbID: string): Promise<MovieDetailResponse> {
    const path = `${BASE_URL}&i=${imdbID}`;
    return request(path).then((res) => res.json());
  }
}

export default MovieService.getInstance();
