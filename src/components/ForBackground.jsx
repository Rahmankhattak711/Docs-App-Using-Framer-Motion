import React, { useRef } from "react";
import Card from "./Card.js";

function ForBackground() {
  const ref = useRef(null);

  const data = [
    {
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      labore architecto dolor delectus numquam molestiae!`,
      fileSize: ".10Mb",
      close: true,
      tag: { isOpen: true, tagTitle: true },
    },
    {
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      labore architecto dolor delectus numquam molestiae!`,
      fileSize: ".50Mb",
      close: false,
      tag: { isOpen: true, tagTitle: true },
    },
    {
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      labore architecto dolor delectus numquam molestiae!`,
      fileSize: ".5Mb",
      close: true,
      tag: { isOpen: true, tagTitle: false },
    },
  ];

  return (
    <div className="fixed left-2 top-2 z-[3] w-full h-screen flex gap-3 flex-wrap">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default ForBackground;
