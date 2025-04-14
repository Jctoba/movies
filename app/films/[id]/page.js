import MovieDetails from "../../components/MovieDetails";
import { getFilmById } from "../../services/filmService";

export default async function FilmDetails({ params }) {
  try {
    const film = await getFilmById(params.id);
    return <MovieDetails film={film} />;
  } catch (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">
          {error.message}
        </div>
        <a href="/" className="btn btn-primary">Retour à la liste</a>
      </div>
    );
  }
}