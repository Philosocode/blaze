import React, { useState } from "react";
import { FaPlay, FaComments, FaTh, FaMagic, FaCode, FaRocket } from "react-icons/fa";
import classNames from "classnames";

import WhyIcons from "./why-icons.component";
import ProcessTab from "./process-tab.component";
import ProcessCard from "./process-card.component";
import { aosHeadingAttributes } from "../../shared/data.shared";

const Process = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const highlightClasses = classNames({
    "c-process__highlight": true,
    "is-first": currentTab === 0,
    "is-second": currentTab === 1,
    "is-third": currentTab === 2,
  });

  function getTabs() {
    const names = ["START", "DESIGN", "CODE"];

    return names.map((name, idx) => (
      <ProcessTab key={name} currentTab={currentTab} setCurrentTab={setCurrentTab} tabId={idx} tabName={name} />
    ));
  }

  function getProcessCards() {
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis molestiae, corrupti facere aliquam placeat velit illo, excepturi quae consectetur reiciendis recusandae sint a similique mollitia officiis minima. Incidunt, tempora harum";
    const cardsData = [
      { title: "Initial Prep", icon: FaPlay },
      { title: "Brief Chat", icon: FaComments },
      { title: "Wireframes", icon: FaTh },
      { title: "Design", icon: FaMagic },
      { title: "Code", icon: FaCode },
      { title: "Launch", icon: FaRocket },
    ];

    return cardsData.map((data, idx) => (
      <ProcessCard
        key={data.title}
        description={description}
        FaIcon={data.icon}
        isRight={idx % 2 !== 0}
        stepNum={idx + 1}
        title={data.title}
      />
    ));
  }

  const processCards = getProcessCards();
  
  return (
    <section className="o-grid o-section o-section--black" id="process">
      <div className="o-grid__item--center c-process__content">
        <h2 className="c-heading c-heading--light c-heading--section" {...aosHeadingAttributes}>What To Expect</h2>
        <WhyIcons />
        
        <div className="c-process__tabs" data-aos="fade-up" data-aos-offset={300} data-aos-delay={800}>
          { getTabs() }
          <div className="c-process__bar"></div>
          <div className={highlightClasses}></div>
        </div>
        <div data-aos="fade-up" data-aos-delay={1000}>
          { processCards[currentTab * 2] }
          { processCards[currentTab * 2 + 1] }
        </div>
      </div>
    </section>
  )
};

export default Process;