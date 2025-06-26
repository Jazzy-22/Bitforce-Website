import { useTranslation } from "react-i18next";
import { useRef } from "react";

const IconsAndDescriptions = () => {
  const [t, i18n] = useTranslation();
  const serviceSection = useRef();

  const moveCarousel = (evt) => {
    const event = new CustomEvent("move-carousel", {
      bubbles: true,
      detail: Number(evt.currentTarget.dataset.id),
    });

    document.dispatchEvent(event);
    scrollToService();
  };

  const scrollToService = () => {
    window.scrollTo({
      top: serviceSection.current.offsetTop,
      behavior: 'smooth',
    });
  };



  return (
    <div className="icons-descriptions py-5 m-auto
                    d-xl-flex justify-content-xl-between
                    d-lg-flex justify-content-lg-center flex-lg-nowrap
                    d-flex flex-wrap justify-content-around" id="service" ref={serviceSection}>
      <div
        data-id={0}
        className="cursor-pointer icons-desc-size text-decoration-none text-dark"
        onClick={moveCarousel}
      >
        <div className="text-center">
          <img
            src="icons/softwareFactory.svg"
            alt="Software Factory"
          />
        </div>
        <div className="text-center mt-4 d-none d-lg-flex">
          <h1 className="mb-2 fw-bold">{t("iconsAndDescriptions.SF_title")}</h1>
        </div>
      </div>
      <div
        data-id={1}
        className="cursor-pointer icons-desc-size text-decoration-none text-dark"
        onClick={moveCarousel}
      >
        <div className="text-center">
          <img
            src="icons/qualityAssurance.png"
            alt="Quality Assurance"
          />
        </div>
        <div className="text-center mt-4 d-none d-lg-flex">
          <h1 className="mb-2 fw-bold">{t("iconsAndDescriptions.QA_title")}</h1>
        </div>
      </div>
      <div
        data-id={2}
        className="cursor-pointer icons-desc-size text-decoration-none text-dark"
        onClick={moveCarousel}
      >
        <div className="text-center">
          <img
            src="icons/release_management.png"
            alt="Release Management"
          />
        </div>
        <div className="text-center mt-4 d-none d-lg-flex">
          <h1 className="mb-2 fw-bold">{t("iconsAndDescriptions.RM_title")}</h1>
        </div>
      </div>
      <div
        data-id={3}
        className="cursor-pointer icons-desc-size text-decoration-none text-dark"
        onClick={moveCarousel}
      >
        <div className="text-center container-icon">
          <img
            src="icons/consultingServices.png"
            alt="Consulting Services"
          />
        </div>
        <div className="text-center mt-4 d-none d-lg-flex">
          <h1 className="mb-2 fw-bold">{t("iconsAndDescriptions.CS_title")}</h1>
        </div>
      </div>
    </div>
  );
};
export default IconsAndDescriptions;
