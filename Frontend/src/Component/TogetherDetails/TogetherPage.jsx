import React from "react";
import Page from "./Page";
import Brands from "../Brands/Brands";

function TogetherPage() {
  return (
    <div className="mt-5">
      <h1 className="text-start text-2xl py-2 font-bold uppercase">
        Frequently Bought Together
      </h1>
      <Page />
      <Page />
      <Page />
      <Brands />
    </div>
  );
}

export default TogetherPage;
