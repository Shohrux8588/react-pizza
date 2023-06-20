import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

function Pagination({ setCurrentPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
