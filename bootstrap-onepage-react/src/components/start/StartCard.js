import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export const StartCard = ({ title, children, ...otherProps }) => (
  <Card {...otherProps}>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardText>{children}</CardText>
    </CardBody>
  </Card>
);
