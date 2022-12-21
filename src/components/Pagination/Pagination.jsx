import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination({pages, setCurrentPage}) {
  function handlePageClick(pageItem){
    const selectedPage = setCurrentPage(pageItem.selected);
  }
  return (
    <ReactPaginate
        pageCount={pages}
        previousLabel="prev"
        nextLabel="next"
        onPageChange={handlePageClick}
        containerClassName="d-flex gap"
    
    />
  )
}

export default Pagination