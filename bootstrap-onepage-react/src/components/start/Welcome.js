import React, { Fragment } from "react";
import styled from "styled-components";
import { ButtonGroup, Button } from "reactstrap";

const WelcomeTemplate = ({ ...otherProps }) => (
  <Fragment>
    <div {...otherProps}>
      <h1>We are OneWorld</h1>
      <h2>
        <em>Interconnecting humans, since 2014.</em>
      </h2>
    </div>
    <ReadMoreWrapper>
      <ButtonGroup>
        <Button size="lg" color="light" as="a" href="#who-we-are">
          Read more
        </Button>
        <Button size="lg" color="secondary" as="a" href="#contact-us">
          Contact us
        </Button>
      </ButtonGroup>
    </ReadMoreWrapper>
  </Fragment>
);

const ReadMoreWrapper = styled.div.attrs({
  className: "d-flex align-center justify-content-center"
})`
  margin-top: -100px;
  margin-bottom: 100px;
`;

export const Welcome = styled(WelcomeTemplate).attrs({
  className:
    "d-flex align-center flex-md-row flex-column justify-content-around px-5 text-light"
})`
  padding-top: 50vh;
  padding-bottom: 50vh;
  background: linear-gradient(#007bff, #77f775) !important;
`;
