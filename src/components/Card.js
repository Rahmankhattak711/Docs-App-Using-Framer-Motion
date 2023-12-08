import React from "react";
import { FaFileAlt, FaDownload, FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      // dragConstraints={reference}
      className="relative h-72 w-60 py-10 px-8 rounded-[50px] overflow-hidden text-white bg-zinc-900"
    >
      <div>
        <FaFileAlt />
        <p className="text-xs mt-3">{data.desc}</p>
      </div>
      <div className="w-[100%] left-0 absolute bottom-0">
        <div className="flex justify-between items-center px-10 py-4">
          <h4>{data.fileSize}</h4>
          {data.close ? <FaRegWindowClose /> : <FaDownload />}
        </div>
        {data.tag.isOpen && (
          <div className="bg-green-700 font-semibold text-center px-8 py-3 w-[100%]">
            <h3>{data.tag.tagTitle ? "Download Now" : "Download Close"}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
