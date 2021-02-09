import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Arrow from '../../assets/Arrow';

import { PaginationWrapper, PaginationButton, ArrowButton } from './styles';

function Pagination(props) {
  const {
    pagination,
    handlePaginate,
    pagesInfo: { page, previousPage, nextPage, totalPages },
  } = props;

  const paginateWithArrow = useCallback(
    (type) => {
      const newPage = type === 'prev' ? previousPage : nextPage;

      handlePaginate(newPage);
    },
    [previousPage, nextPage, handlePaginate],
  );

  if (pagination.length) {
    return (
      <PaginationWrapper>
        <ArrowButton
          type="button"
          aria-label="Previous page"
          disabled={!previousPage}
          onClick={() => paginateWithArrow('prev')}
        >
          <Arrow />
        </ArrowButton>
        <ul>
          {pagination.map((pageOption) => (
            <li key={`pagination-item-${pageOption}`}>
              <PaginationButton
                type="button"
                aria-label={`Page ${pageOption}`}
                disabled={page === pageOption}
                onClick={() => handlePaginate(pageOption)}
              >
                {pageOption}
              </PaginationButton>
            </li>
          ))}
        </ul>
        <ArrowButton
          type="button"
          aria-label="Next page"
          disabled={page >= totalPages}
          onClick={() => paginateWithArrow('next')}
        >
          <Arrow />
        </ArrowButton>
      </PaginationWrapper>
    );
  }

  return <></>;
}

Pagination.propTypes = {
  pagination: PropTypes.arrayOf(PropTypes.number).isRequired,
  pagesInfo: PropTypes.shape({
    page: PropTypes.number.isRequired,
    previousPage: PropTypes.number.isRequired,
    nextPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
  }).isRequired,
  handlePaginate: PropTypes.func.isRequired,
};

export default Pagination;
