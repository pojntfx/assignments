import React from "react";
import { StartLayout } from "../../layouts/StartLayout";
import { WhatWeDoSection } from "./WhatWeDoSection";
import { WhoWeAreSection } from "./WhoWeAreSection";
import { OurCustomersSection } from "./OurCustomersSection";
import { ShowcaseSection } from "./ShowcaseSection";

export const Start = () => (
  <StartLayout>
    <WhoWeAreSection />
    <WhatWeDoSection />
    <OurCustomersSection />
    <ShowcaseSection />
  </StartLayout>
);
