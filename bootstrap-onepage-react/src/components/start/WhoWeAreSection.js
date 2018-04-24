import React from "react";
import { Section } from "../global/Section";
import { StartCard } from "./StartCard";
import styled from "styled-components";

export const WhoWeAreSection = () => (
  <Section title="Who we are" link="who-we-are">
    <div className="row">
      <div className="col-12 col-sm-6 col-xl-4">
        <ResponsiveImage src="/profile-max.png" alt="Profile picture" />
        <StartCard title="Max Mustermann">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint in
          quaerat cum deserunt quo?
        </StartCard>
      </div>
      <div className="col-12 col-sm-6 col-xl-4">
        <ResponsiveImage src="/profile-maxima.png" alt="Profile picture" />
        <StartCard title="Maxima Mustermann">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis saepe
          maxime nam harum unde eius, exercitationem ipsam doloribus! Iure,
          saepe.
        </StartCard>
      </div>
      <div className="col-12 col-sm-6 col-xl-4">
        <ResponsiveImage src="/profile-neo.png" alt="Profile picture" />
        <StartCard title="Neo Müllermann">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
          doloremque reprehenderit sed amet quisquam eaque.
        </StartCard>
      </div>
    </div>
  </Section>
);

const ResponsiveImage = styled.img.attrs({
  className: "card-img-top"
})`
  width: 100%;
  object-fit: cover;
  height: 200px;
`;
