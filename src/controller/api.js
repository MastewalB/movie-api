const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;

async function home(req, res) {
    res.render('index', { movieDetails: null, error: null });
}

async function getMovieDetail(req, res) {
    const movieName = req.body.movieName;
    try {
        const movieDetail = await axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);

        res.render('index', {
            movieName,
            movieDetails: { 
                title: movieDetail.data.Title,
                year: movieDetail.data.Year,
                rate: movieDetail.data.Rated,
                releaseDate: movieDetail.data.Released,
                duration: movieDetail.data.Runtime,
                poster: movieDetail.data.Poster,
                genre: movieDetail.data.Genre,
                director: movieDetail.data.Director,
                writer: movieDetail.data.Writer,
                actors: movieDetail.data.Actors,
                plot: movieDetail.data.Plot,
                language: movieDetail.data.Language,
                country: movieDetail.data.Country,
                imdbRating: movieDetail.data.imdbRating,
                imdbVotes: movieDetail.data.imdbVotes 
            },
            error: null
        })
    } catch (err) {
       console.log('Error', err);
       res.render('index', {
            movieName,
            movieDetails: null,
            error: 'An error occurred while fetching movie details.'
       })
    }
}

module.exports = {
    home,
    getMovieDetail
};