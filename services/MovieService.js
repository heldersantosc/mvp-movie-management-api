import axios from "axios";
import Adapter from "../adapters/Adapter.js";

class MovieService {
    constructor() {
        this.middlewareAdapter = new Adapter();
        this.tmdbApiKey = "YOUR_TMDB_API_KEY";
    }

    async addMovie(movieData) {
        const response = await this.middlewareAdapter.addMovie(movieData);
        return response.data;
    }

    async getMovies() {
        const response = await this.middlewareAdapter.getMovies();
        return response.data;
    }

    async getMovieById(id) {
        const response = await this.middlewareAdapter.getMovieById(id);
        return response.data;
    }

    async updateMovie(id, movieData) {
        const response = await this.middlewareAdapter.updateMovie(id, movieData);
        return response.data;
    }

    async deleteMovie(id) {
        const response = await this.middlewareAdapter.deleteMovie(id);
        return response.data;
    }

    async searchExternalMovies(query) {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${this.tmdbApiKey}&query=${query}`
        );
        return response.data;
    }
}

export default MovieService;
