import React from "react"

export default function MovieCard(props) {
  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    vote_average: rating,
    overview: description
  } = props

  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterPath}`}
        alt={`${title} poster`}
      />
      <div className="card--content">
        <h3 className="card--title">{title}</h3>
        <p>
          <small>RELEASE DATE: {releaseDate}</small>
        </p>
        <p>
          <small>RATING: {rating}</small>
        </p>
        <p className="card--desc">{description}</p>
      </div>
    </div>
  )
}
