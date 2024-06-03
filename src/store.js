import { create } from "zustand";

const useStore = create((set) => ({

  favoriteMovies: [], //movies that are favorited

  toggleFavoriteMovie: (movieId) => 
    set((state) => ({
      favoriteMovies: state.favoriteMovies.includes(movieId)
        ? state.favoriteMovies.filter((id) => id !== movieId)
        : [...state.favoriteMovies, movieId],
    })),
    
    searchTerm: "",
    setSearchTerm: (term) => set({
      searchTerm: term
    })
   
})); 

export default useStore; 
