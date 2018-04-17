import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";

const SectionTemplate = ({ title, link, children }) => {
  return (
    <section id={link}>
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{children}</CardText>
        </CardBody>
      </Card>
    </section>
  );
};

export const Section = styled(SectionTemplate)`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
