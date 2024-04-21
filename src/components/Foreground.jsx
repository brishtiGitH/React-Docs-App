import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const [newDoc, setNewDoc] = useState("");
  const [file, setFile] = useState("");
  const [cardData, setCardData] = useState([]);
  const [count, setCount] = useState(0);
  const containerRef = useRef();
  useEffect(() => {
    console.log("count: ", count);
    if (count >= 8)
      alert("You have reached the max limit! Please refresh to continue.");
  }, [count]);
  function randomFooterColor() {
    const colors = ["green", "sky", "pink", "red", "orange", "violet", "rose"];
    const index = Math.ceil(Math.random() * 10);
    const bgc = colors[index > colors.length - 1 ? 0 : index];
    return bgc;
  }
  function isClose() {
    const close = [true, false];
    const index = Math.ceil(Math.random() * 10);
    console.log(index);
    const isCloseIcon = close[index > close.length - 1 ? 0 : index];
    return isCloseIcon;
  }

  function addNewDoc(getTitle, getFileSize) {
    const newData = {
      description: getTitle,
      fileSize: getFileSize,
      close: isClose(),
      tag: {
        isOpen: true,
        title: "Download Now",
        bgColor: randomFooterColor(),
      },
    };
    setCardData([...cardData, newData]);
    setFile("");
    setNewDoc("");
  }

  return (
    <div className="w-full h-full flex fixed z-[3] top-0 left-0">
      <div
        ref={containerRef}
        className="w-full h-full flex gap-4 flex-wrap p-5"
      >
        {cardData.map((item, index) => {
          return <Card data={item} reference={containerRef} />;
        })}
      </div>
      <div className="new w-72 bg-zinc-900 p-5">
        <input
          value={newDoc}
          onChange={(e) => setNewDoc(e.target.value)}
          type="text"
          placeholder="new document"
          className="p-2 rounded-md mb-3"
        />
        <input
          value={file}
          onChange={(e) => setFile(e.target.value)}
          type="text"
          placeholder="enter file size"
          className="p-2 rounded-md mb-3"
        />

        <button
          disabled={count >= 8 ? true : false}
          onClick={() => {
            setCount(count + 1);
            addNewDoc(newDoc, file);
          }}
          className="bg-zinc-300 text-black px-[10px] py-[5px] mt-2 rounded-md"
        >
          Add Document
        </button>
      </div>
    </div>
  );
};

export default Foreground;
