import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import MovieGrid from "./components/MovieGrid";
import Pagination from "./components/Pagination";
import MovieModal from "./components/MovieModal";

const API_KEY = "15d2ea6d0dc1d476efbca3eba2b9bbfb";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("all");

  // Fetch movies dynamically based on filter and page
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let url = "";

        if (filter === "all") {
          url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;
        } else {
          url = `https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&page=${page}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, filter]);

  // Filter by search
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar with Filter */}
      <Navbar search={search} setSearch={setSearch}>
        <Filter onFilter={setFilter} />
      </Navbar>

      {/* Main Content */}
      <main className="p-4 flex flex-col items-center">
        {loading && <p className="text-gray-400">Loading movies...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {!loading && !error && (
          <>
            <MovieGrid
              movies={filteredMovies}
              IMAGE_BASE={IMAGE_BASE}
              setSelected={setSelected}
            />
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          </>
        )}
      </main>

      {/* Movie Details Modal */}
      {selected && (
        <MovieModal
          movie={selected}
          IMAGE_BASE={IMAGE_BASE}
          setSelected={setSelected}
        />
      )}
    </div>
  );
}
