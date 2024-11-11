import PropTypes from "prop-types";

const Carousel = ({ width, height, urlList }) => {
  return (
    <>
      <div>
        <ul>
          {urlList.length !== 0 &&
            urlList.map((item, index) => {
              return (
                <li key={index}>
                  <img width={width} height={height} src={item} alt="" />
                </li>
              );
            })}
        </ul>
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
