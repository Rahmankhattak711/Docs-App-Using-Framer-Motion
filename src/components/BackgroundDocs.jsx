import React from "react";

function BackgroundDocs() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute w-[100%] flex justify-center p-6 text-zinc-500 font-semibold top-5">
          Documents
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 font-semibold text-[150px]">
          Docs
        </div>
      </div>
    </>
  );
}

export default BackgroundDocs;
