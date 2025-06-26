import "../App.css";
import LanguageSelector from "./language";
import { useTranslation } from "react-i18next";

const MarqueeClients = () => {
  const [t,i18n] = useTranslation();

  const images = [
    { name: "envysion-icon.svg" },
    { name: "globo-icon.png" },
    { name: "optus-icon.svg" },
    { name: "telecom-icon.svg" },
    { name: "newfront-icon.svg" },
    { name: "cruz-roja-icon.jpg" },
  ];

  const repeatedImages = images.concat(images);

  return (
    <div className="marquee-clients-container bf-section-v-padding">
      <div className="contact-us-title mb-5">
        {t("clients.title")}
      </div>
      <div className="marquee-clients-text text-center mb-4">
        {t("clients.desc")}
      </div>
      <div className="marquee-container overflow-hidden position-relative w-100">
        <div className="marquee-track d-flex position-absolute">
          {repeatedImages.map((image) => (
            <div className="marquee-card d-flex justify-content-center align-items-center">
              <img
                src={`icons/${image.name}`}
                height={100}
                width={200}
                alt={image.name}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MarqueeClients;
