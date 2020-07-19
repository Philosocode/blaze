import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { GoDeviceDesktop, GoDeviceMobile } from "react-icons/go";

import ServiceCard from "./service-card.component";
import SectionHeader from "../shared/section-header.component";

const Services = () => {
  const cardsData = [
    { heading: "Website Creation", icon: GoDeviceDesktop },
    { heading: "Full-Stack Development", icon: FaLayerGroup, },
    { heading: "Mobile App Development", icon: GoDeviceMobile, },
  ];
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a maximus ex. Vivamus aliquet sem vitae lorem fringilla ultricies. Aenean ;non neque non massa malesuada venenatis a vel ipsum. Donec quis lorem ac velit efficitur auctor.";

  return (
    <section className="o-grid o-section o-section--black" id="services">
      <div className="o-grid__item--wide">
        <SectionHeader color="black">Services</SectionHeader>
        <div className="c-service__cards">
          {
            cardsData.map((card, idx) => (
              <ServiceCard key={card.heading} Icon={card.icon} heading={card.heading} text={lorem} idx={idx} />
            ))   
          }
        </div>
      </div>
    </section>
  );
};

export default Services;