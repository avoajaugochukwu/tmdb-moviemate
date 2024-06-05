import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set) => ({
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
          }),
         
      }), {
        name: "favorite-movies",
        getStorage: () => localStorage,
      
      }
    )
    )
  ); 

export default useStore;
