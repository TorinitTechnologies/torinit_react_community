import React,{useEffect} from "react";
import "./ImagePlayer.css";

export const ImagePlayer = ({
  images,
  timeGap,
  autoplay,
  backdrop,
  showDots,
} = props) => {
  const [current, setCurrent] = React.useState(0);
  const [isPlaying, setPlaying] = React.useState(false);

  const handlePrev = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    } else setCurrent(0);
  };

  if (isPlaying) {
    setTimeout(() => {
        handleNext();
    }, timeGap || 3000);
  }
  

  console.log()
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {backdrop && <div className="backdrop"></div>}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "10px",
            padding: "40px 10px",
            height: "200px",
            width: "300px",
            zIndex: "100000",
            backgroundColor: "white",
          }}
        >
          <div className="main-image-wrapper">
            {!isPlaying && (
              <span
                className={current === 0 && "inactive"}
                onClick={handlePrev}
              >
                {"<"}{" "}
              </span>
            )}
            <div className="image-wrapper fade">
              <img src={images[current]} className="img-imgWrapper" alt="" />
            </div>
            {!isPlaying && (
              <span
                className={current === images.length - 1 && "inactive"}
                onClick={handleNext}
              >
                {">"}
              </span>
            )}
          </div>
          {autoplay && (
            <>
              {isPlaying && (
                <span
                  className="play-pause-button"
                  onClick={() => {
                      setPlaying(false)
                  }}
                >
                  {"||"}
                </span>
              )}
              {!isPlaying && (
                <span
                  className="play-pause-button"
                  onClick={() => setPlaying(true)}
                >
                  {"I>"}
                </span>
              )}
            </>
          )}
        </div>
      </div>
      {showDots && (
        <div className="dot-wrapper">
          {images.map((img,index) => {
            return <div className={`dot ${current===index && 'active-dot'}`} onClick={()=>setCurrent(index)}></div>;
          })}
        </div>
      )}
    </>
  );
};
