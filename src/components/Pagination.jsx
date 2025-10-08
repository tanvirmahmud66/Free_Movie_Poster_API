import React from "react";

export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex items-center justify-center gap-3 mt-10 select-none">
      {/* Previous Button */}
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-md 
          ${
            page === 1
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:shadow-cyan-500/40"
          }`}
      >
        ← Prev
      </button>

      {/* Page Indicator */}
      <span className="px-6 py-2 bg-gray-800 text-cyan-400 font-semibold rounded-full shadow-inner border border-cyan-500/30">
        Page {page} / {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-md 
          ${
            page === totalPages
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white hover:shadow-cyan-500/40"
          }`}
      >
        Next →
      </button>
    </div>
  );
}
