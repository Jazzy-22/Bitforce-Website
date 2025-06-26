import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SplitCarousel from "./components/carousel";
import Header from "./components/header";
import IconsAndDescriptions from "./components/iconsAndDescription";
import Footer from "./components/footer";
import Img from "./components/img";
import Arrow from "./components/arrow";
import Spinner from "./components/spinner";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ContactUs from "./components/contactUs";
import './i18n';
import GeneralInformation from "./components/generalInformation";
import Courses from "./components/courses";
import MarqueeClients from "./components/marqueeClients";

function App() {
  const spinnerRef = useRef(null);
  const [logoImg, setLogoImg] = useState("logos/bitforce.svg");

  useLayoutEffect(() => {
    setTimeout(() => {
      spinnerRef.current.hideSpinner();
      setTimeout(() => {
        document.getElementById("header-logo").classList.add("header-logo");
        document.getElementById("header-logo").classList.remove("hidden-logo");
      }, 1000);
    }, 5000);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = () => {
    const courses = document.getElementById("courses")?.getBoundingClientRect()
    const carousel = document.getElementById("splitCarousel")?.getBoundingClientRect()

    if (courses?.y < 58.4375 & courses?.bottom > 43.4375 ||
      carousel?.y < 58.4375 & carousel?.bottom > 43.4375)
      setLogoImg("logos/bitforce-white.svg")
    else setLogoImg("logos/bitforce.svg")
  }


  return (
    <div style={{ height: "100%" }}>
      <Spinner ref={spinnerRef} />
      <Header />
      <div className="hidden-logo sticky-logo" id="header-logo">
        <img src={logoImg} height="70px" width="70px" alt="BitForce logo" />
      </div>
      <div>
        <div style={{ backgroundColor: "white", marginTop: "30px" }}>
          <Img />
          <IconsAndDescriptions />
          <SplitCarousel id="splitCarousel" />
          <GeneralInformation />
          <MarqueeClients/>
          <Courses />
          <ContactUs />
          <Arrow />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
