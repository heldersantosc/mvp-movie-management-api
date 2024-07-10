import logger from "../logger.js";
import MovieService from "../services/MovieService.js";

class MovieController {
    constructor() {
        this.movieService = new MovieService();
    }

    async addMovie(req, res) {
        try {
            const movie = await this.movieService.addMovie(req.body);
            logger.info("Movie added successfully", { movie });
            res.json(movie);
        } catch (error) {
            logger.error("Error adding movie", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getMovies(req, res) {
        try {
            const movies = await this.movieService.getMovies();
            logger.info("Movies retrieved successfully", { movies });
            res.json(movies);
        } catch (error) {
            logger.error("Error retrieving movies", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getMovieById(req, res) {
        try {
            const movie = await this.movieService.getMovieById(req.params.id);
            logger.info("Movie retrieved successfully", { movie });
            res.json(movie);
        } catch (error) {
            logger.error("Error retrieving movie", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async updateMovie(req, res) {
        try {
            const movie = await this.movieService.updateMovie(req.params.id, req.body);
            logger.info("Movie updated successfully", { movie });
            res.json(movie);
        } catch (error) {
            logger.error("Error updating movie", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async deleteMovie(req, res) {
        try {
            await this.movieService.deleteMovie(req.params.id);
            logger.info("Movie deleted successfully", { movieId: req.params.id });
            res.status(204).send();
        } catch (error) {
            logger.error("Error deleting movie", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async searchExternalMovies(req, res) {
        try {
            const movies = await this.movieService.searchExternalMovies(req.query.query);
            logger.info("External movies search successful", { query: req.query.query, movies });
            res.json(movies);
        } catch (error) {
            logger.error("Error searching external movies", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default new MovieController();
