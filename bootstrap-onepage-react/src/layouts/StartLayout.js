import React, { Fragment } from "react";
import { MainNavigation } from "../components/start/MainNavigation";
import { Welcome } from "../components/start/Welcome";
import { Footer } from "../components/global/Footer";

export const StartLayout = ({ children }) => (
  <Fragment>
    <MainNavigation title="OneWorld" />
    <Welcome />
    <div className="container my-3">{children}</div>
    <Footer />
  </Fragment>
);
