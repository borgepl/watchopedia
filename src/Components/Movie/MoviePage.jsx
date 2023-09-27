import { useState } from "react";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

const MoviePage = () => {

    const [movieState, SetMovieState] = useState(() => {
        return {movieList: [ "Die Hard", "Harry Potter" ]}
    });

    function handleAddMovie(newMovie) {
        SetMovieState((prevState) => {
            return {
                ...prevState, 
                movieList: prevState.movieList.concat([newMovie])
            }
        })
    }

    return (
        <div className="col-12 col-md-6 my-3 border text-center">
            <AddMovie handleAddMovie={handleAddMovie}/>
            <MovieList movieList={movieState.movieList} />
        </div>
    );
};

export default MoviePage;