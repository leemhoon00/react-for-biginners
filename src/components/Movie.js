import PropTypes from "prop-types";

function Movie({title, summary, coverImg, genres}){
    return (
        <div>
          <img src={coverImg} alt={title}/>
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
    );
}

Movie.propTypes={
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;