import MovieCard from "./MovieCard";

export default function MovieList({ films }) {
  const activeFilms = films.filter(film => !film.deleted);

  return (
    <div className="row">
      {activeFilms.map((film, index) => (
        <MovieCard
          key={index}
          id={film.id}
          title={film.title}
          description={film.description}
          imageUrl={film.imageUrl}
        />
      ))}
    </div>
  );
} 