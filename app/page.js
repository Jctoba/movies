import MovieList from "./components/MovieList";
import { getFilms } from "./services/filmService";

export default async function PagePrincipale() {
  const films = await getFilms();

  return <MovieList films={films} />;
}
