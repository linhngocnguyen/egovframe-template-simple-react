import OdsHeader from "components/ods/OdsHeader";
import OdsPagination from "components/ods/OdsPagination";
import OdsSectionSearch from "components/ods/OdsSectionSearch";
import OdsSkipNav from "components/ods/OdsSkipNav";
import React from "react";

function UI_A7140210() {
  return (
    <>
      <OdsSkipNav />
      <div id="wrap" className="body-bg">
        <OdsHeader />
        <div id="contents" className="nf-content" tabIndex={0}>
          <div className="nf-container">
            <OdsSectionSearch />
            <div className="section">
              <h3 className="tb-list-top">
                총 <span>190</span>건
              </h3>
              <div className="section-box">
                <div className="tb-responsive-box">
                  {/* table min width : 1240px(no scroll bar) */}
                  <table className="tb-list sticky">
                    <caption>LIST</caption>
                    <colgroup>
                      <col style={{ width: "8%" }} />
                      <col style={{ width: "12%" }} />
                      <col style={{ width: "60%" }} />
                      <col style={{ width: "20%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">no</th>
                        <th scope="col"> 고객명</th>
                        <th scope="col">내용</th>
                        <th scope="col">상담일시</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="ta-c">10</td>
                        <td className="ta-c">이나라</td>
                        <td>온라인 계좌상담</td>
                        <td className="ta-c">2023.07.17 10:00</td>
                      </tr>
                      <tr>
                        <td className="ta-c">9</td>
                        <td className="ta-c">김산</td>
                        <td>온라인 계좌상담</td>
                        <td className="ta-c">2023.07.17 10:00</td>
                      </tr>
                      <tr>
                        <td className="ta-c">8</td>
                        <td className="ta-c">지수</td>
                        <td>온라인 계좌상담</td>
                        <td className="ta-c">2023.07.17 10:00</td>
                      </tr>
                      <tr>
                        <td className="ta-c">7</td>
                        <td className="ta-c">이강산</td>
                        <td>온라인 계좌상담</td>
                        <td className="ta-c">2023.07.17 10:00</td>
                      </tr>
                      <tr>
                        <td className="ta-c">6</td>
                        <td className="ta-c">홍길동</td>
                        <td>온라인 계좌상담</td>
                        <td className="ta-c">2023.07.17 10:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <OdsPagination />
                {/* <div class="actionbar">
					<button type="button" class="nf-btn nf-btn-primary nf-btn-outline">다음자료</button>
				</div> */}
              </div>
            </div>
          </div>
        </div>
        {/* //nf-content */}
      </div>
    </>
  );
}

export default UI_A7140210;
