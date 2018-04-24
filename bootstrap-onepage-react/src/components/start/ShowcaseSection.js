import React, { Component, Fragment } from "react";
import { Section } from "../global/Section";
import styled from "styled-components";
import { Collapse, Button } from "reactstrap";

export const ShowcaseSection = () => (
  <Section title="What we do" link="what-we-do">
    <div className="row">
      <ExpandableElement summary="magic">
        Lorem ipsum dolor sit amet.
      </ExpandableElement>
    </div>
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
    const { summary } = this.props;
    const { toggleCollapse } = this;

    return (
      <Fragment>
        <Button outline onClick={toggleCollapse}>
          {summary}
        </Button>
        <Collapse isOpen={isOpen}>Lorem ipsum dolor sit amet.</Collapse>
      </Fragment>
    );
  }
}

const SimpleGridElement = styled.div.attrs({ className: "col-12 col-sm-6" })``;
