import React from "react";
import OdsPagination from "./OdsPagination";

function OdsSection() {
  return (
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
              <col style={{ width: "5%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "40%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "15%" }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">no</th>
                <th scope="col"> 고객명</th>
                <th scope="col">연락처</th>
                <th scope="col">상담내용</th>
                <th scope="col">상담장소</th>
                <th scope="col">상담일시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ta-c">10</td>
                <td className="ta-c">이나라</td>
                <td className="ta-c">010-0000-0000</td>
                <td>정책자금상담</td>
                <td className="ta-c">대전청사 1층</td>
                <td className="ta-c">2023.07.17 10:00</td>
              </tr>
              <tr>
                <td className="ta-c">9</td>
                <td className="ta-c">지수</td>
                <td className="ta-c">010-0000-0000</td>
                <td>신한카드 신청</td>
                <td className="ta-c">대전청사 1층</td>
                <td className="ta-c">2023.07.17 10:00</td>
              </tr>
              <tr>
                <td className="ta-c">8</td>
                <td className="ta-c">김산</td>
                <td className="ta-c">010-0000-0000</td>
                <td>정책자금상담</td>
                <td className="ta-c">대전청사 1층</td>
                <td className="ta-c">2023.07.17 10:00</td>
              </tr>
              <tr>
                <td className="ta-c">7</td>
                <td className="ta-c">홍길동</td>
                <td className="ta-c">010-0000-0000</td>
                <td>정책자금상담</td>
                <td className="ta-c">대전청사 1층</td>
                <td className="ta-c">2023.07.17 10:00</td>
              </tr>
              <tr>
                <td className="ta-c">6</td>
                <td className="ta-c">김철수</td>
                <td className="ta-c">010-0000-0000</td>
                <td>정책자금상담</td>
                <td className="ta-c">대전청사 1층</td>
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
  );
}

export default OdsSection;
