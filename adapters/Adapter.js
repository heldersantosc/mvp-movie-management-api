import axios from "axios";

class Adapter {
    constructor() {
        this.middlewareServiceUrl = "http://localhost:5000";
    }

    async addMovie(movieData) {
        return await axios.post(`${this.middlewareServiceUrl}/movies`, movieData);
    }

    async getMovies() {
        return await axios.get(`${this.middlewareServiceUrl}/movies`);
    }

    async getMovieById(id) {
        return await axios.get(`${this.middlewareServiceUrl}/movies/${id}`);
    }

    async updateMovie(id, movieData) {
        return await axios.put(`${this.middlewareServiceUrl}/movies/${id}`, movieData);
    }

    async deleteMovie(id) {
        return await axios.delete(`${this.middlewareServiceUrl}/movies/${id}`);
    }
}

export default Adapter;
