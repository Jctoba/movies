'use client';

import Link from "next/link";
import { deleteFilm } from "../services/filmService";

export default function MovieCard({ id, title, description, imageUrl }) {
  const handleDelete = async () => {
    try {
      await deleteFilm(id);
      // Rafraîchir la page pour mettre à jour la liste
      window.location.reload();
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      alert('Erreur lors de la suppression du film');
    }
  };

  return (
    <div className="card col-lg-4 col-12">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link href={`/films/${id}`} className="btn btn-primary">📖</Link>{" "}
        <button onClick={handleDelete} className="btn btn-dark">🗑️</button>
      </div>
    </div>
  );
} 