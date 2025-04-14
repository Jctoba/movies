const API_URL = 'http://localhost:3001';

export async function getFilms() {
  try {
    const response = await fetch(`${API_URL}/films`, {
      cache: 'no-store' // Désactive le cache pour avoir les données à jour
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des films');
    }
    
    const films = await response.json();
    return films;
  } catch (error) {
    console.error('Erreur lors de la récupération des films:', error);
    throw error;
  }
}

export async function getFilmById(id) {
  try {
    const response = await fetch(`${API_URL}/films/${id}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Film non trouvé');
    }
    
    const film = await response.json();
    return film;
  } catch (error) {
    console.error('Erreur lors de la récupération du film:', error);
    throw error;
  }
}

export async function updateFilm(id, data) {
  try {
    const response = await fetch(`${API_URL}/films/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de la mise à jour du film');
    }
    
    const updatedFilm = await response.json();
    return updatedFilm;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du film:', error);
    throw error;
  }
}

export async function deleteFilm(id) {
  try {
    const response = await fetch(`${API_URL}/films/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deleted: true }),
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de la suppression du film');
    }
    
    const updatedFilm = await response.json();
    return updatedFilm;
  } catch (error) {
    console.error('Erreur lors de la suppression du film:', error);
    throw error;
  }
} 