import Dashboard from "@/components/shared/dashboard";
import Feauture from "@/components/shared/feauture";
import Hero from "@/components/shared/hero";
import NextTopLoader from "nextjs-toploader";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <NextTopLoader />
      <Hero />
      <Feauture />
      <Dashboard />
    </div>
  );
};

export default MainPage;
