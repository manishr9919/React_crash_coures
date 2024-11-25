
import React from 'react';
import { Button } from '@chakra-ui/react';

const Pagination = ({ page, totalPages, onPageChange, limit, onLimitChange }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const handleFirstPage = () => {
    onPageChange(1);
  };

  const handlePreviousPage = () => {
    onPageChange(page - 1);
  };

  const handleNextPage = () => {
    onPageChange(page + 1);
  };

  const handleLastPage = () => {
    onPageChange(totalPages);
  };

  return (
    <div>
      <Button onClick={handleFirstPage} disabled={isFirstPage}>First</Button>
      <Button onClick={handlePreviousPage} disabled={isFirstPage}>Previous</Button>
      <span>Page {page} of {totalPages}</span>
      <Button onClick={handleNextPage} disabled={isLastPage}>Next</Button>
      <Button onClick={handleLastPage} disabled={isLastPage}>Last</Button>
      <select value={limit} onChange={onLimitChange}>
        <option value="3">3 per page</option>
        <option value="6">6 per page</option>
        <option value="9">9 per page</option>
      </select>
    </div>
  );
};

export default Pagination;
