import React from "react";

function OdsPagination() {
  return (
    <div className="pagination">
      <button
        type="button"
        className="btn-page-start"
        onClick={() => {}}
        disabled=""
      >
        <span className="sr-only">처음</span>
      </button>
      <button
        type="button"
        className="btn-page-prev"
        onClick={() => {}}
        disabled=""
      >
        <span className="sr-only">이전</span>
      </button>
      <div className="nav">
        <button type="button" className="active">
          1
        </button>
        <button type="button" onClick={() => {}}>
          2
        </button>
        <button type="button" onClick={() => {}}>
          3
        </button>
        <button type="button" onClick={() => {}}>
          4
        </button>
        <button type="button" onClick={() => {}}>
          5
        </button>
      </div>
      <button type="button" className="btn-page-next" onClick={() => {}}>
        <span className="sr-only">다음</span>
      </button>
      <button type="button" className="btn-page-end" onClick={() => {}}>
        <span className="sr-only">마지막</span>
      </button>
    </div>
  );
}

export default OdsPagination;
