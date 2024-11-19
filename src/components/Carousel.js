import PropTypes from "prop-types";
import "./Carousel.css";
import { useEffect, useState } from "react";

const Carousel = ({ className, width, height, urlList }) => {
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    const distance = setInterval(() => {
      if (curIndex < urlList.length - 1) {
        setCurIndex(curIndex + 1);
      } else {
        setCurIndex(0);
      }
    }, 5000);
    return () => {
      clearInterval(distance);
    };
  }, [curIndex, urlList]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`${className}`}
      >
        <span
          className="re"
          onClick={() => {
            setCurIndex((curIndex - 1 + urlList.length) % urlList.length);
          }}
          style={{ width: Math.floor(width / 10) }}
        >
          <svg
            t="1731747985783"
            viewBox="-200 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1545"
          >
            <path
              d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
              fill=""
              p-id="1546"
            ></path>
          </svg>
        </span>
        <div style={{ overflow: "hidden", width }}>
          <ul
            className="re"
            style={{
              width: width * urlList.length,
              height,
              display: "flex",
              transition: "transform 2s ease",
              transform: `translateX(${-width * curIndex}px)`,
            }}
          >
            {urlList.map((item, index) => {
              return (
                <li
                  key={index}
                  id={index}
                  style={{
                    width,
                    height,
                  }}
                  className="item"
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                    src={item}
                    alt=""
                  />
                </li>
              );
            })}
          </ul>
          <div className="circle_group">
            {urlList.map((_, index) => {
              return (
                <div
                  className={`circle ${index === curIndex && "circle_active"}`}
                  onClick={() => setCurIndex(index)}
                ></div>
              );
            })}
          </div>
        </div>
        <span
          className="re"
          onClick={() => {
            setCurIndex((curIndex + 1) % urlList.length);
          }}
          style={{ width: Math.floor(width / 10) }}
        >
          <svg
            t="1731756841031"
            viewBox="200 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1706"
          >
            <path
              d="M542.767 120c-8.189 0-16.37899999 3.124-22.628 9.372-12.496 12.497-12.496 32.759 0 45.256L857.512 512l-337.373 337.373c-12.496 12.497-12.496 32.758 0 45.255 12.49800001 12.497 32.758 12.497 45.256 0l359.99999999-360c12.496-12.497 12.496-32.758 1e-8-45.255l-359.99999999-360c-6.249-6.249-14.43899999-9.373-22.62800001-9.373z"
              fill=""
              p-id="1707"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  urlList: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  circleColor: PropTypes.array,
};

Carousel.defaultProps = {
  className: "",
  urlList: ["/assets/1.jpg"],
  width: 200,
  height: 200,
};

export default Carousel;
