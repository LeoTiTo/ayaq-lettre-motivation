"use client";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, image, typeOfLangage }) => {
  const [event, setEvent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    
    setIsAnimating(true);
    
    // Delay the state change to allow animation to start
    setTimeout(() => {
      setEvent(!event);
    }, 50); // Half of the animation duration
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match the animation duration
  };

  return (
    <>
      <style jsx>{`
        @keyframes flip {
          0% { transform: rotateY(0deg); }
          40% { transform: perspective(600px) rotateY(180deg); }
          100% { transform: perspective(600px) rotateY(180deg); }
        }
        
        @keyframes flip-back {
          0% { transform: perspective(600px) rotateY(180deg); }
          100% { transform: perspective(600px) rotateY(0deg); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-flip {
          animation: flip 2s cubic-bezier(0.4,0.2,0.2,1) forwards;
        }
        
        .animate-flip-back {
          animation: flip-back 0.7s cubic-bezier(0.4,0.2,0.2,1) forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-in forwards;
        }
      `}</style>
      <div 
        className="flex items-center justify-center"
        style={{ perspective: '800px' }}
      >
        <div
          className={`min-h-[400px] max-w-[200px] min-w-[200px] flex flex-col items-center cursor-pointer shadow-lg transition-corlors duration-500 justify-center rounded-xl ${
            event ? "bg-black text-white" : "bg-white text-black"
          } ${
            isAnimating
              ? event
                ? "animate-flip"
                : "animate-flip-back"
              : ""
          }
          transition-all ease-in-out duration-200
          hover:scale-105
          hover:shadow-xl
          active:scale-105
          active:shadow-xl
      `}
          onClick={handleChange}
          style={{ transformStyle: "preserve-3d" }}
        >
          {!event && !isAnimating && (
            <img
              src={image}
              alt={`Logo ${title}`}
              className="h-[180px] max-w-[180px] animate-fade-in opacity-100"
            />
          )}
          <div
            className={`p-4 w-full flex flex-col gap-4`}
          >
            {!event && !isAnimating ? (
              <>
                <div className="animate-fade-in opacity-100">
                  <h3 className="font-light">{typeOfLangage}</h3>
                  <div className="w-full h-px bg-gray-300"></div>
                  <h2>{title}</h2>
                </div>
              </>
            ) : event && !isAnimating ? (
              <p className="animate-fade-in opacity-100">{description}</p>
            ) : (
              <div className="h-[180px] flex items-center justify-center">
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;