import { forwardRef, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

const SplitCarousel = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.addEventListener(
      "move-carousel",
      (e) => {
        setActiveIndex(e.detail);
      },
      false
    );
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={activeIndex}
      interval={90000}
      touch={true}
      slide={true}
      onSelect={handleSelect}
      id={props.id}
      className="mb-5 mt-0"
    >
      <Carousel.Item>
        <div className="bf-carousel-item d-flex flex-lg-row flex-md-column flex-sm-column flex-column">
          <div className="d-flex flex-column carousel-half justify-content-center align-items-center">
            <div className="carousel-text w-75">
              <h2 className="text-white mb-4">
                {t("carouselItemAndDescriptions.softwareFactory")}
              </h2>
              <p className="text-white ">
                {t("carouselItemAndDescriptions.softwareFactoryText")}
              </p>
            </div>
          </div>
          <div className="d-flex flex-column carousel-half justify-content-center p-0 mx-0">
            <img
              src="/img/02HDufdqeRUDu3tl0NnY2qZ-2.png"
              alt="Software Factory"
              className="object-fit-cover"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bf-carousel-item d-flex flex-lg-row flex-md-column flex-sm-column flex-column">
          <div className="d-flex flex-column carousel-half justify-content-center align-items-center">
            <img
              src="/img/qa.jpg"
              className="img-carousel-qa m-auto object-fit-cover"
              alt="Quality Assurance"
            ></img>
          </div>
          <div className="d-flex flex-column carousel-half w-xs-50 w-sm-100 justify-content-center align-items-center">
            <div className="carousel-text w-75">
              <h2 className="text-white  mb-4">
                {t("carouselItemAndDescriptions.qualityAssurance")}
              </h2>
              <p className="text-white ">
                {t("carouselItemAndDescriptions.qualityAssuranceText")}
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bf-carousel-item d-flex flex-lg-row flex-md-column flex-sm-column flex-column">
          <div className="d-flex flex-column carousel-half justify-content-center align-items-center">
            <div className="carousel-text w-75">
              <h2 className="text-white mb-4">
                {t("carouselItemAndDescriptions.releaseManagement")}
              </h2>
              <p className="text-white ">
                {t("carouselItemAndDescriptions.releaseManagementText")}
              </p>
            </div>
          </div>
          <div className="d-flex flex-column carousel-half w-xs-50 w-sm-100 justify-content-center p-0 mx-0">
            <img
              src="/img/devops.jpg"
              alt={t("carouselItemAndDescriptions.releaseManagement")}
              className="object-fit-cover"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bf-carousel-item d-flex flex-lg-row flex-md-column flex-sm-column flex-column">
          <div className="d-flex flex-column carousel-half  justify-content-center align-items-center">
            <img
              src="/img/consulting.jpg"
              alt={t("carouselItemAndDescriptions.consultingServices")}
              className="object-fit-cover"
            />
          </div>
          <div className="d-flex flex-column carousel-half justify-content-center align-items-center">
            <div className="carousel-text w-75">
              <h2 className="text-white  mb-4">
                {t("carouselItemAndDescriptions.consultingServices")}
              </h2>
              <p className="text-white ">
                {t("carouselItemAndDescriptions.consultingServicesText")}
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
});

export default SplitCarousel;
