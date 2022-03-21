import React from "react";
import { getPageArray } from "../../utils/page";
const Pagination = ({totalPage, page, changePage}) => {
  let pageArray = getPageArray(totalPage)
  return (
    <div className="pagination">
      {pageArray.map((p) => (
        <span
          key={p}
          className={page === p ? "page page_active" : "page"}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
