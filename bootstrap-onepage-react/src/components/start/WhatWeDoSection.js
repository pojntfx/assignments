import React from "react";
import { Section } from "../global/Section";
import { StartCard } from "./StartCard";
import styled from "styled-components";

export const WhatWeDoSection = () => (
  <Section title="What we do" link="what-we-do">
    <div className="row">
      <SimpleGridElement title="Software">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugit sed id autem.
      </SimpleGridElement>
      <SimpleGridElement title="Hardware">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugit sed id autem.
      </SimpleGridElement>
      <SimpleGridElement title="Talking">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugit sed id autem.
      </SimpleGridElement>
      <SimpleGridElement title="Consulting">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugit sed id autem.
      </SimpleGridElement>
      <SimpleGridElement title="Electronics">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugit sed id autem.
      </SimpleGridElement>
      <SimpleGridElement title="Design">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugit sed id autem.
      </SimpleGridElement>
      <SimpleGridElement title="Management">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        fugit sed id autem.
      </SimpleGridElement>
    </div>
  </Section>
);

const SimpleGridElement = ({ children, ...otherProps }) => (
  <SimpleGridElementWrapper>
    <SimpleCardCard {...otherProps}>{children}</SimpleCardCard>
  </SimpleGridElementWrapper>
);

const SimpleGridElementWrapper = styled.div.attrs({
  className: "col-12 col-sm-6 col-lg-4 col-xl-3 pb-4"
})``;

const SimpleCardCard = styled(StartCard).attrs({})`
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    transition: 0.25s;
  }
  cursor: pointer;
`;
