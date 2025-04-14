import Link from "next/link";

export default function MovieDetails({ film }) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={film.imageUrl} className="img-fluid rounded" alt={film.title} />
        </div>
        <div className="col-md-8">
          <h1 className="mb-3">{film.title}</h1>
          <p className="lead">{film.description}</p>
          <div className="mt-4">
            <Link href="/" className="btn btn-primary me-2">Retour à la liste</Link>
            <a href="/" className="btn btn-dark">Supprimer</a>
          </div>
        </div>
      </div>
    </div>
  );
} 