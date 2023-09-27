const MovieList = (props) => {
    return (
        <div>
        {props.movieList.map((movie,index) => {
            return <div key={index}> - {movie}</div>
        })}
        </div>
    );
};

export default MovieList;