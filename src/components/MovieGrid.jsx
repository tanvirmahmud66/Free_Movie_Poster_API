import React, { useState } from "react";
import { Play } from "lucide-react"; // ensure installed via: npm install lucide-react

export default function MovieGrid({ movies, IMAGE_BASE, setSelected }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} IMAGE_BASE={IMAGE_BASE} setSelected={setSelected} />)
      ) : (
        <p className="text-gray-400 col-span-full text-center mt-4">
          No movies found.
        </p>
      )}
    </div>
  );
}

/* 🔹 Movie Card with Lazy Load Effect */
function MovieCard({ movie, IMAGE_BASE, setSelected }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
      onClick={() => setSelected(movie)}
    >
      {/* Rating Badge */}
      <div className="absolute top-2 right-2 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md z-10">
        ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
      </div>

      {/* Skeleton Placeholder while image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse" />
      )}

      {/* Poster with lazy loading + blur transition */}
      <img
        loading="lazy"
        src={
          movie.poster_path
            ? IMAGE_BASE + movie.poster_path
            : "https://via.placeholder.com/500x750?text=No+Image"
        }
        alt={movie.title}
        onLoad={() => setLoaded(true)}
        className={`w-full aspect-[2/3] object-cover transition-all duration-700 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
        }`}
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-3 text-center">
        {/* Round Play Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(`https://www.google.com/search?q=${movie.title}+watch`, "_blank");
          }}
          className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-4 mb-3 transition-transform transform hover:scale-110 shadow-md"
        >
          <Play className="w-5 h-5" />
        </button>

        {/* Movie Details */}
        <div>
          <h2 className="text-sm font-semibold mb-1">{movie.title}</h2>
          <p className="text-xs text-gray-300 line-clamp-3">
            {movie.overview || "No description available."}
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-2 bg-gray-900">
        <h2 className="text-sm font-semibold truncate">{movie.title}</h2>
        <p className="text-xs text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  );
}
