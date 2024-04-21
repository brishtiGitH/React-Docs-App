import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.05 }}
      className="relative flex-shrink-0 w-60 h-72 px-8 py-10 opacity-85 bg-zinc-900 rounded-[30px] overflow-hidden text-white"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">
        {data.description}
      </p>
      <div className="footer absolute w-full bottom-0 left-0">
        <div className="flex items-center py-3 p-8 justify-between mb-3">
          <h5>{data.fileSize}</h5>
          <div className="p-[5px] bg-zinc-400 rounded-full">
            {data.close ? (
              <IoMdClose color="black" />
            ) : (
              <IoMdDownload color="black" />
            )}
          </div>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full bg-${data.tag.bgColor}-300 text-black font-semibold p-3 flex items-center justify-center`}
          >
            <h3>{data.tag.title}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
