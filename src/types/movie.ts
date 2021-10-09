export type MovieDetailData = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: "movie" | "series" | "episode";
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
};

export type MovieSearchData = Pick<
  MovieDetailData,
  "Title" | "Year" | "imdbID" | "Type" | "Poster"
>;

export type MovieRequestSuccessResponse = { Response: "True" };
export type MovieRequestFailureResponse = { Response: "False"; Error: string };

export type MovieSearchResponse =
  | (MovieRequestSuccessResponse & {
      Search: MovieSearchData[];
      totalResults: number;
    })
  | MovieRequestFailureResponse;

export type MovieDetailResponse =
  | (MovieRequestSuccessResponse & MovieDetailData)
  | MovieRequestFailureResponse;
