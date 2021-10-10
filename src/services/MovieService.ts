import axios, { AxiosInstance, AxiosResponse } from "axios";
import type { MovieSearchResponse, MovieDetailResponse } from "@/types/movie";

const API_KEY = process.env.VUE_APP_API_KEY;
const API_END_POINT = process.env.VUE_APP_API_END_POINT;

export const BASE_URL = `${API_END_POINT}/?apikey=${API_KEY}`;

class MovieService {
  static instance: AxiosInstance | null = null;

  static getInstance(): AxiosInstance {
    if (MovieService.instance === null) {
      MovieService.instance = axios.create({
        baseURL: "/.netlify/functions/movie",
      });
    }
    return MovieService.instance;
  }

  static getSearchResult(
    term: string,
    page: number
  ): Promise<AxiosResponse<MovieSearchResponse>> {
    return this.getInstance().post("", { s: term, page });
  }

  static getMovieDetail(
    imdbID: string
  ): Promise<AxiosResponse<MovieDetailResponse>> {
    return this.getInstance().post("", { i: imdbID });
  }
}

export default MovieService;
