import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '/src/components/Molecule/Carousel.css'

const carouselData = [
  {
    imgURL: "/image/banner1.png",
    imgLink: "",
  },
  {
    imgURL: "/image/banner2.png",
    imgLink: "",
  },
];
const SampleCarousel = () => {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrowsClass="z-0"
        autoPlaySpeed={3000}
        centerMode={false}
        className=" w-[100%] md:h-[370px] h-[110px] "
        containerClass=""
        dotListClass=""
        draggable={false}
        showDots={false}
        autoPlay={true}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl={true}
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        sliderClass=""
        slidesToSlide={1}
        swipeable={false}
      >
        {carouselData.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.imgURL}
                width={"100%"}
                decoding="async"
                loading="lazy"
                alt="carousel-image"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SampleCarousel;
