import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasData: boolean; // New prop to track if the table has data
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  hasData,
}) => {
  const range = 2; // Number of pages to show before and after the current page

  // Calculate the page numbers to display
  const getPageNumbers = () => {
    const startPage = Math.max(1, currentPage - range);
    const endPage = Math.min(totalPages, currentPage + range);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Previous button */}
      <button
        type="button" // Explicitly set type to "button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || !hasData} // Disable if no data or on the first page
        className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        &lt;
      </button>

      {/* Page numbers */}
      {hasData ? (
        getPageNumbers().map((page) => (
          <button
            key={page}
            type="button" // Explicitly set type to "button"
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'} hover:bg-blue-200`}
          >
            {page}
          </button>
        ))
      ) : (
        <button
          type="button" // Explicitly set type to "button"
          onClick={() => onPageChange(1)}
          className="px-4 py-2 rounded bg-gray-200 text-gray-600 disabled:opacity-50"
          disabled
        >
          1
        </button>
      )}

      {/* Next button */}
      <button
        type="button" // Explicitly set type to "button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || !hasData} // Disable if no data or on the last page
        className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
