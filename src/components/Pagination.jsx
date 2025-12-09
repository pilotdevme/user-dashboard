'use client';
import React from 'react';

export default function Pagination({ page, totalPages, onPageChange, prevLabel = 'Prev', nextLabel = 'Next' }) {
  return (
    <div className="pager">
      <button
        className="btn"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page <= 1}
      >
        {prevLabel}
      </button>

      <div className="small-muted">
        Page {page} of {totalPages}
      </div>

      <button
        className="btn"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page >= totalPages}
      >
        {nextLabel}
      </button>
    </div>
  );
}
