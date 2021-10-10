import { computed, reactive } from "vue";
import { MovieService } from "@/services";
import type { MovieSearchData, MovieDetailData } from "@/types/movie";
import { omit } from "lodash";

const START_PAGE = 1;
const MOVIE_COUNT_PER_PAGE = 10;

export const EMPTY = "EMPTY";
export const NOT_FOUND = "NOT_FOUND";
export const VALID = "VALID";

type EmptyData<T> = {
  type: typeof EMPTY;
  value: T[];
};

type NotFoundData<T> = {
  type: typeof NOT_FOUND;
  value: T[];
};

type ValidSuggestionsData = {
  type: typeof VALID;
  value: MovieSearchData[];
  count: number;
};

type ValidDetailData = {
  type: typeof VALID;
  value: MovieDetailData[];
};

type MovieState = {
  search: {
    loading: boolean;
    error: Error | null;
    data:
      | EmptyData<MovieSearchData>
      | NotFoundData<MovieSearchData>
      | ValidSuggestionsData;
    currentPage: number;
    latestSearchTerm: string;
  };
  detail: {
    loading: boolean;
    error: Error | null;
    data:
      | EmptyData<MovieDetailData>
      | NotFoundData<MovieDetailData>
      | ValidDetailData;
  };
};

const initialState: MovieState = {
  search: {
    loading: false,
    error: null,
    data: { type: EMPTY, value: [] },
    currentPage: START_PAGE,
    latestSearchTerm: "",
  },
  detail: {
    loading: false,
    error: null,
    data: { type: EMPTY, value: [] },
  },
};

const notFoundData = <T>(): NotFoundData<T> => ({ type: NOT_FOUND, value: [] });

const validSuggestionsData = (
  value: MovieSearchData[],
  count: number
): ValidSuggestionsData => ({ type: VALID, value, count });

const validDetailData = (value: MovieDetailData[]): ValidDetailData => ({
  type: VALID,
  value,
});

const useMovieData = () => {
  const state = reactive<MovieState>(initialState);

  const fetchMovies = async (term: string, page = START_PAGE) => {
    state.search.loading = true;
    state.search.error = null;
    try {
      const { data } = await MovieService.getSearchResult(term, page);

      state.search.data =
        data.Response === "True"
          ? validSuggestionsData(
              state.search.data.value.concat(data.Search),
              data.totalResults
            )
          : notFoundData();
    } catch (e) {
      state.search.error = e as Error;
    } finally {
      state.search.loading = false;
    }
  };

  const fetchNextPageMovies = () => {
    if (state.search.data.type !== VALID) return;
    state.search.currentPage += 1;
    fetchMovies(state.search.latestSearchTerm, state.search.currentPage);
  };

  const setLatestSearchTerm = (term: string) => {
    state.search.latestSearchTerm = term;
  };

  const hasMore = computed(() => {
    if (state.search.data.type !== VALID) {
      return false;
    }

    const [totalCount, currentCount] = [
      state.search.data.count,
      state.search.currentPage * MOVIE_COUNT_PER_PAGE,
    ];

    return currentCount <= totalCount;
  });

  const searchCount = computed(() => {
    if (state.search.data.type !== VALID) return null;

    const [totalCount, currentCount] = [
      state.search.data.count,
      state.search.currentPage * MOVIE_COUNT_PER_PAGE,
    ];

    return {
      currentCount: currentCount <= totalCount ? currentCount : totalCount,
      totalCount,
    };
  });

  const isSearchEmpty = computed(() => state.search.data.type === EMPTY);
  const isSearchValid = computed(() => state.search.data.type === VALID);
  const isSearchNotFound = computed(() => state.search.data.type === NOT_FOUND);

  const clearSearchData = () => {
    state.search.loading = false;
    state.search.data = { type: EMPTY, value: [] };
    state.search.error = null;
    state.search.currentPage = START_PAGE;
    state.search.latestSearchTerm = "";
  };

  const fetchMovieDetail = async (imdbID: string) => {
    state.detail.loading = true;
    state.detail.error = null;

    try {
      const { data } = await MovieService.getMovieDetail(imdbID);

      state.detail.data =
        data.Response === "True"
          ? validDetailData([omit(data, "Response")])
          : notFoundData();
    } catch (e) {
      state.detail.error = e as Error;
    } finally {
      state.detail.loading = false;
    }
  };

  const isDetailValid = computed(() => state.detail.data.type === VALID);
  const isDetailNotFound = computed(() => state.detail.data.type === NOT_FOUND);

  return {
    search: {
      loading: computed(() => state.search.loading),
      data: computed(() => state.search.data),
      latestSearchTerm: computed(() => state.search.latestSearchTerm),
      isSearchEmpty,
      isSearchValid,
      isSearchNotFound,
      hasMore,
      searchCount,
    },
    detail: {
      loading: computed(() => state.detail.loading),
      data: computed(() => state.detail.data),
      isDetailValid,
      isDetailNotFound,
    },
    fetchMovies,
    fetchMovieDetail,
    clearSearchData,
    fetchNextPageMovies,
    setLatestSearchTerm,
  };
};

export default useMovieData;
