import React from "react";

import { UncontrolledCarousel } from "reactstrap";
import { Section } from "../global/Section";

const items = [
  {
    src: "/header-1.jpg",
    altText: "Image of Canonical",
    caption: "Canonical",
    header: "Great software, great people, awesome community!"
  },
  {
    src: "/header-2.jpg",
    altText: "Image of RedHat",
    caption: "RedHat",
    header: "Open, Free, Libre? OneWorld has got you covered!"
  },
  {
    src: "/header-3.jpg",
    altText: "Image of the Linux Foundation",
    caption: "Linux Foundation",
    header: "GPL-3.0 and Innovation? Go not further than OneWord!"
  }
];

export const OurCustomersSection = () => (
  <Section title="Our Customers" link="our-customers">
    <UncontrolledCarousel items={items} />
  </Section>
);
