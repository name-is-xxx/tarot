import PropTypes from "prop-types";
import "./Carousel.css";

const Carousel = ({ width, height, urlList }) => {
  return (
    <>
      <div>
        <ul style={{ width: width, height: height, overflow: "hidden" }}>
          {urlList.length !== 0 &&
            urlList.map((item, index) => {
              return (
                <li
                  key={index}
                  id={index}
                  style={{ width: width, height: height }}
                >
                  <img
                    style={{
                      maxWidth: width,
                      maxHeight: height,
                      objectFit: "contain",
                      textAlign: "center",
                    }}
                    src={item}
                    alt=""
                  />
                </li>
              );
            })}
        </ul>
        <div className="circle"></div>
      </div>
    </>
  );
};

Carousel.propTypes = {
  urlList: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
};

Carousel.defaultProps = {
  urlList: ["/assets/1.jpg"],
  width: 200,
  height: 200,
};

export default Carousel;
