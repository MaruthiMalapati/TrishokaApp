import React from "react";
import Testimonials from "./testimonilas/Testimonials";
import ServiceCards from "./services/ServiceCards";
import Banner from "./Banner";
import Stories from "./testimonilas/Stories";
import HappyClients from "./testimonilas/HappyClintsCountingWidget";

export default function Body() {
  return (
    <main>
      <Banner />
      <ServiceCards />
      <Testimonials />
      <br />
      <br />
      <HappyClients />
      <br />
      <Stories />
    </main>
  );
}
