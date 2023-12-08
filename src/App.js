import React from "react";
import BackgroundDocs from "./components/BackgroundDocs";
import ForBackground from "./components/ForBackground";

function page() {
  return (
    <div className="relative h-[100vh] w-[100%] bg-zinc-800">
      <BackgroundDocs />
      <ForBackground/>
    </div>
  );
}

export default page;
