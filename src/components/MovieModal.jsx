import React from "react";

export default function MovieModal({ movie, IMAGE_BASE, setSelected }) {
  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-800 rounded-lg overflow-hidden max-w-3xl w-full grid md:grid-cols-2 shadow-lg"
      >
        <img
          src={
            movie.poster_path
              ? IMAGE_BASE + movie.poster_path
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="p-5 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold text-cyan-400">{movie.title}</h2>
            <button
              onClick={() => setSelected(null)}
              className="text-gray-400 hover:text-red-400 text-lg"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            {movie.release_date || "No date"} | {movie.original_language?.toUpperCase() || "N/A"}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">{movie.overview || "No overview available."}</p>
          <div className="mt-auto flex items-center gap-3 text-sm text-gray-400">
            ⭐ {movie.vote_average} | Votes: {movie.vote_count}
          </div>
          <a
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-center bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            View on TMDB
          </a>
        </div>
      </div>
    </div>
  );
}

