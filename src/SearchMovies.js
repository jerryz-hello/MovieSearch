import React, { useState } from "react"
import MovieCard from "./MovieCard"

export default function SearchMovies() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async e => {
    e.preventDefault()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <form action="" className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="What's your favorite movie?"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter(movie => movie.poster_path)
          .map(movie => (
            <MovieCard {...movie} key={movie.id} />
          ))}
      </div>
    </>
  )
}
