import React, { Component, Fragment } from "react";
import { Section } from "../global/Section";
import styled from "styled-components";
import { Collapse, Button, Card, CardBody } from "reactstrap";

export const ShowcaseSection = () => (
  <Section title="Showcase" link="showcase">
    <ExpandableElement summary="Linux">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, illo
      cum! Corporis soluta, atque est fuga omnis quisquam voluptatum assumenda
      doloremque ad!
    </ExpandableElement>
    <ExpandableElement summary="FreeBSD">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, illo
      cum! Corporis soluta, atque est fuga omnis quisquam voluptatum assumenda
      doloremque ad!
    </ExpandableElement>
    <ExpandableElement summary="DragonFlyBSD">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, illo
      cum! Corporis soluta, atque est fuga omnis quisquam voluptatum assumenda
      doloremque ad!
    </ExpandableElement>
    <ExpandableElement summary="GNU">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, illo
      cum! Corporis soluta, atque est fuga omnis quisquam voluptatum assumenda
      doloremque ad!
    </ExpandableElement>
    <ExpandableElement summary="Hurd">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, illo
      cum! Corporis soluta, atque est fuga omnis quisquam voluptatum assumenda
      doloremque ad!
    </ExpandableElement>
  </Section>
);

const ExpandableElement = ({ summary, children }) => (
  <SimpleGridElement>
    <CollapseComponent summary={summary}>{children}</CollapseComponent>
  </SimpleGridElement>
);

class CollapseComponent extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const { summary, children, ...otherProps } = this.props;
    const { toggleCollapse } = this;

    return (
      <Fragment>
        <Button
          outline
          block
          color="primary"
          onClick={toggleCollapse}
          className="mb-3"
        >
          {summary}
        </Button>
        <Collapse isOpen={isOpen} {...otherProps} className="mb-3">
          <Card>
            <CardBody>{children}</CardBody>
          </Card>
        </Collapse>
      </Fragment>
    );
  }
}

const SimpleGridElement = styled.div``;
