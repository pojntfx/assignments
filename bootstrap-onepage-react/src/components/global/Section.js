import React from "react";
import styled from "styled-components";

const SectionTemplate = ({ title, link, children, ...otherProps }) => {
  return (
    <section id={link} {...otherProps}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export const Section = styled(SectionTemplate)`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
