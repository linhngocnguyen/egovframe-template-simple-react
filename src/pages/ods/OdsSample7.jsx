import OdsHeader from "components/ods/OdsHeader";
import OdsSection from "components/ods/OdsSection";
import OdsSectionSearch from "components/ods/OdsSectionSearch";
import OdsSkipNav from "components/ods/OdsSkipNav";
import React from "react";

function UI_A7140120() {
  return (
    <>
      <OdsSkipNav />
      <div id="wrap" className="body-bg">
        <OdsHeader />
        <div id="contents" className="nf-content" tabIndex={0}>
          <div className="nf-container">
            <OdsSectionSearch />
            <OdsSection />
          </div>
        </div>
        {/* //nf-content */}
      </div>
    </>
  );
}

export default UI_A7140120;
