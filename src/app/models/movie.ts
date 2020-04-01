export interface Movie {
    backdrop_path: string;
    id: number;
    original_language: string;
    overview: string;
    release_date: string;
    title: string;
}

export interface ArrayMovies {
    movies: Movie[];
}