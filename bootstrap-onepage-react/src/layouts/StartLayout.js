import React, { Fragment } from "react";
import { MainNavigation } from "../components/start/MainNavigation";
import { Welcome } from "../components/start/Welcome";

export const StartLayout = ({ children }) => (
  <Fragment>
    <MainNavigation title="OneWorld" />
    <Welcome />
    <div className="container mt-3">{children}</div>
  </Fragment>
);
