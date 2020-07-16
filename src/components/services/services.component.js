import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { GoDeviceDesktop, GoDeviceMobile } from "react-icons/go";

import { aosHeadingAttributes } from "../../shared/data.shared";
import ServiceCard from "./service-card.component";

const Services = () => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a maximus ex. Vivamus aliquet sem vitae lorem fringilla ultricies. Aenean ;non neque non massa malesuada venenatis a vel ipsum. Donec quis lorem ac velit efficitur auctor.";

  return (
    <section className="o-grid o-section o-section--black" id="services">
      <div className="o-grid__item--wide">
        <h2 className="c-heading c-heading--light c-heading--centered c-heading--section" {...aosHeadingAttributes}>
          Services
        </h2>
        <div className="c-service__cards">
          <ServiceCard Icon={GoDeviceDesktop} heading="Website Creation" text={lorem}  />
          <ServiceCard Icon={FaLayerGroup} heading="Full-Stack Development" text={lorem}  />
          <ServiceCard Icon={GoDeviceMobile} heading="Mobile App Development" text={lorem}  />
        </div>
      </div>
    </section>
  );
};

export default Services;