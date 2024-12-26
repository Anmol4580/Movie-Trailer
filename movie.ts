export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export interface MovieVideo {
  key: string;
  site: string;
  type: string;
  official: boolean;
}