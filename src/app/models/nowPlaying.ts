export interface NPResult {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface NPDates {
  maximum: string;
  minimum: string;
}

export interface NPRootObject {
  page: number;
  results: NPResult[];
  dates: NPDates;
  total_pages: number;
  total_results: number;
}
