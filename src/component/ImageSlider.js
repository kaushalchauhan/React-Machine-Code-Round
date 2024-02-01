import React, { useEffect, useState } from "react";
import data from "../constant";
const ImageSlider = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handelPrevImgBtn = () => {
    setActiveImgIndex(!activeImgIndex ? data.length - 1 : activeImgIndex - 1);
  };
  const handelNextImgBtn = () => {
    setActiveImgIndex((activeImgIndex + 1) % data.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handelNextImgBtn();
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImgIndex]);

  return (
    <div className="flex justify-center">
      <button
        className="p-7 font-bold  rounded hover:text-red-500 hover:underline"
        onClick={handelPrevImgBtn}
      >
        Previous
      </button>
      {data.map((img, i) => (
        <>
          <div>
            <img
              key={img.url}
              className={
                "w-[550px] h-[550px] object-contain image-fade " +
                (activeImgIndex === i
                  ? "block opacity-100"
                  : "hidden opacity-0")
              }
              src={img.download_url}
              alt={data[activeImgIndex].author}
            />
          </div>
        </>
      ))}
      <button
        onClick={handelNextImgBtn}
        className="p-7 font-bold  rounded hover:text-red-500 hover:underline"
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
