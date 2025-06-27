"use client";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, image, typeOfLangage }) => {
  const [event, setEvent] = useState(false);

  const handleChange = () => {
    setEvent(!event);
  };

  return (
    <div
      className="[perspective:800px] flex items-center justify-center"
    >
      <div
        className={`min-h-[400px] max-w-[200px] min-w-[200px] flex flex-col items-center cursor-pointer p-4 transition-colors duration-500 shadow-lg justify-center rounded-xl bg-white ${
          event
            ? "animate-flip bg-blue-50"
            : "animate-flip-back bg-white"
        }
        transition-all ease-in-out duration-200
        hover:scale-105
    `}
        onClick={handleChange}
        style={{ transformStyle: "preserve-3d" }}
      >
        {!event && (
          <img
            src={image}
            alt={`Logo ${title}`}
            className="h-[180px] max-w-[180px]"
          />
        )}
        <div
          className={`p-4 w-full flex flex-col gap-4`}
        >
          {!event ? (
            <>
              <h3 className="font-light">{typeOfLangage}</h3>
              <div className="w-full h-px bg-gray-300"></div>
              <h2>{title}</h2>
            </>
          ) : (
            <p className="animate-fade-in opacity-100">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;