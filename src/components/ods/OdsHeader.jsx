import React, { useState } from "react";

function OdsHeader() {
  const [sideBarActive, setSideBarActive] = useState(false);

  const handleSideBarOpen = () => {
    let sidebar = document.querySelector(".sidebar-wrap");
    let bodyWrap = document.querySelector(".body-bg");
    setSideBarActive(true);
    sidebar.classList.add("active");
    bodyWrap.classList.add("active-sidebar");
  };

  const handleSidebarClose = () => {
    let sidebar = document.querySelector(".sidebar-wrap");
    let bodyWrap = document.querySelector(".body-bg");
    sidebar.classList.add("inactive");
    setTimeout(() => {
      sidebar.classList.remove("active");
      sidebar.classList.remove("inactive");
    }, 200);
    bodyWrap.classList.remove("active-sidebar");
  };
  return (
    <header className="nf-header">
      <div className="nf-toolbar">
        <button className="btn-menu-burger" onClick={handleSideBarOpen}>
          <span className="menu-icon-burger">
            <span className="top-bun" />
            <span className="patty" />
            <span className="bottom-bun" />
          </span>
          <span className="sr-only">전체메뉴보기</span>
        </button>
        <div className={`sidebar-wrap ${sideBarActive ? "active" : ""}`}>
          <div className="sidebar">
            <div className="sidebar-body">
              <div className="sidebar-nav" id="gnb" tabIndex={0}>
                <h3 className="title">
                  <svg
                    className="svg-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path fill="#e0fff2" d="m6 9 6-3 6 3v6l-6 3-6-3V9Z" />
                    <path fill="#a5fcb6" d="m6 9 6 3v7l-6-3V9Z" />
                    <path fill="#81dff8" d="m18 9-6 3v7l6-3V9Z" />
                  </svg>
                  리스트
                </h3>
              </div>
            </div>
            <button
              type="button"
              className="sidebar-close"
              onClick={handleSidebarClose}
            >
              <span className="sr-only">닫기</span>
            </button>
          </div>
        </div>
        {/* //sidebar-wrap */}
        <h1 className="logo">
          <a href="#">
            <span className="sr-only">산림조합중앙회 디지털임업금융시스템</span>
          </a>
        </h1>
        <h2 className="page-title">방문일정 이력</h2>
        <div className="nf-header-btns">
          <div className="btn-header-profile">
            <span className="user-name">김산</span>
            <span className="user-group">여주산림조합</span>
          </div>
          <a href="#" className="btn-header-logout">
            로그아웃
            <svg
              className="svg-icon"
              fill="currentColor"
              viewBox="0 0 17 16"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9.2 15.8h-6C1.7 15.8.4 14.6.4 13V3C.4 1.5 1.6.3 3.2.3h6v1.5h-6C2.5 1.8 2 2.3 2 3v10c0 .7.6 1.2 1.2 1.2h6v1.6z" />
              <path d="M12.2 13.1 11.1 12l2.7-2.7H6.2V7.8h7.6l-2.7-2.7L12.2 4l4.5 4.5-4.5 4.6z" />
            </svg>
          </a>
        </div>
      </div>
      {/*//nf-toolbar*/}
    </header>
  );
}

export default OdsHeader;
