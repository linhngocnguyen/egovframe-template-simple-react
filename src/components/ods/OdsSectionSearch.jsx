import React from "react";

function OdsSectionSearch() {
  return (
    <div className="section-search">
      <div className="gird-box-3">
        <div className="gird-item">
          <div className="text-field-row">
            <div className="text-field">
              <div className="text-field-label">
                <label htmlFor="accoutnumber">검색어</label>
              </div>
              <div className="text-field-input">
                <div className="putin-trailing-icon">
                  <input type="text" className="form-input" id="accoutnumber" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gird-item">
          <div className="text-field">
            <div className="text-field-label">
              <label htmlFor="startdate">기간조회</label>
            </div>
            <div className="text-field-input text-field-date">
              <div className="putin-trailing-icon flex-w-full">
                <input
                  type="text"
                  className="form-input"
                  id="startdate"
                  title="시작일자"
                  readOnly=""
                />
                <button
                  type="ㅗbutton"
                  className="nf-btn nf-btn-icon btn-icon-calendar"
                  aria-label="시작일자"
                >
                  <svg
                    className="svg-icon"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13.51 2.25h-.67v-.67a.67.67 0 0 0-1.34 0v.67H4.85v-.67a.67.67 0 0 0-1.34 0v.67h-.66c-1.1 0-2 .9-2 2v9.33c0 1.1.9 2 2 2h10.67c1.1 0 2-.9 2-2V4.25c-.01-1.11-.9-2-2.01-2zm1 11.33c0 .55-.45 1-1 1H2.85c-.55 0-1-.45-1-1V6.25h12.67v7.33z" />
                    <path d="M7.95 12.41c-.13 0-.26-.05-.36-.15l-2.1-2.17a.492.492 0 0 1 .01-.7c.2-.19.52-.19.71.01l1.69 1.74 1.89-2.53c.17-.22.48-.27.7-.1.22.17.27.48.1.7l-2.24 3c-.09.12-.22.19-.37.2h-.03z" />
                  </svg>
                </button>
              </div>
              <div className="gutter">~</div>
              <div className="putin-trailing-icon flex-w-full">
                <input
                  type="text"
                  className="form-input"
                  id="enddate"
                  title="종료일자"
                  readOnly=""
                />
                <button
                  type="button"
                  className="nf-btn nf-btn-icon btn-icon-calendar"
                  aria-label="종료일자"
                >
                  <svg
                    className="svg-icon"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M13.51 2.25h-.67v-.67a.67.67 0 0 0-1.34 0v.67H4.85v-.67a.67.67 0 0 0-1.34 0v.67h-.66c-1.1 0-2 .9-2 2v9.33c0 1.1.9 2 2 2h10.67c1.1 0 2-.9 2-2V4.25c-.01-1.11-.9-2-2.01-2zm1 11.33c0 .55-.45 1-1 1H2.85c-.55 0-1-.45-1-1V6.25h12.67v7.33z" />
                    <path d="M7.95 12.41c-.13 0-.26-.05-.36-.15l-2.1-2.17a.492.492 0 0 1 .01-.7c.2-.19.52-.19.71.01l1.69 1.74 1.89-2.53c.17-.22.48-.27.7-.1.22.17.27.48.1.7l-2.24 3c-.09.12-.22.19-.37.2h-.03z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //gird-box-3 */}
      <div className="button-group">
        <button
          type="button"
          className="nf-btn nf-btn-second nf-btn-icon-leading"
        >
          <svg
            className="svg-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M18.5 8.1c-.3-.3-.8-.3-1.1 0l-.9.9c-.2-1.1-.6-2.2-1.3-3.2-1.1-1.5-2.8-2.5-4.6-2.8C6.7 2.4 3 5 2.4 8.9c-.6 3.9 2 7.5 5.9 8.1.4.1.8.1 1.1.1 1.5 0 2.9-.5 4.2-1.4.4-.3.4-.8.2-1.1-.3-.4-.8-.4-1.1-.2-1.2.9-2.6 1.2-4.1 1-3-.5-5-3.3-4.6-6.3.5-3 3.3-5 6.3-4.6 1.5.2 2.7 1 3.6 2.2.5.7.8 1.5.9 2.3l-.9-.9c-.3-.3-.8-.3-1.1 0s-.3.8 0 1.1l2.3 2.3c.1.1.3.2.4.2.3 0 .5-.1.7-.2l2.3-2.3c.3-.2.3-.7 0-1.1z" />
          </svg>
          초기화
        </button>
        <button type="button" className="nf-btn nf-btn-primary">
          검색
        </button>
      </div>
    </div>
  );
}

export default OdsSectionSearch;
