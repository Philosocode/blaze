import React, { useState } from "react";
import classNames from "classnames";

import ProcessTab from "./process-tab.component";

const Process = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const highlightClasses = classNames({
    "c-process__highlight": true,
    "is-first": currentTab === 0,
    "is-second": currentTab === 1,
    "is-third": currentTab === 2,
  });

  function getTabs() {
    const names = ["INIT", "DESIGN", "CODE"];

    return names.map((name, idx) => (
      <ProcessTab key={name} currentTab={currentTab} setCurrentTab={setCurrentTab} tabId={idx} tabName={name} />
    ));
  }
  
  return (
    <section className="o-grid c-process__section" id="process">
      <div className="o-grid__item--narrow c-process__content">
        <h2>What To Expect</h2>
        <div className="c-process__tabs">
          { getTabs() }
          <div className="c-process__bar"></div>
          <div className={highlightClasses}></div>
        </div>
      </div>
    </section>
  )
};

export default Process;