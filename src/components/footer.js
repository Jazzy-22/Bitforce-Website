import { Col, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"

const Footer = () => {

  const [t, i18n] = useTranslation();

  const moveCarousel = (evt) => {
    const event = new CustomEvent("move-carousel", {
      bubbles: true,
      detail: Number(evt.currentTarget.dataset.id),
    });

    document.dispatchEvent(event);
  };

    return (
        <footer>
          <div className="w-100">
            <Row className="py-3 px-5 m-0">
              <Col lg={12} xl={3} className="d-flex flex-column align-items-center align-items-xl-start text-center text-lg-start justify-content-start pt-5">
                <div className="footer-img-logo-container d-flex flex-column align-items-center">
                  <div className="footer-logo-img">
                  <img
                    src="logos/bitforce-white.svg"
                    alt="BitForce Logo"
                    width="138 px"
                    height="138 px"
                  />
                  </div>
                  <p className="footer-logo-caption text-center"><span className="font-thick">Bit</span>Force</p>
                  </div>
              </Col>
              <Col xs={12} lg={4} xl={3} className="d-flex flex-column align-items-center align-items-xl-start justify-content-start pt-5">
                <Row>
                  <p className="text-center text-lg-start"><span className="font-thick">{t("footer.services")}</span><br />
                  <div className="font-fine">
                  <a className="text-decoration-none text-white" data-id={0} href="#service" onClick={moveCarousel}>{t("footer.softwareFactory")}</a><br />
                  <a className="text-decoration-none text-white" data-id={1} href="#service" onClick={moveCarousel} >{t("footer.qualityAssurance")}</a><br />
                  <a className="text-decoration-none text-white" data-id={3} href="#service" onClick={moveCarousel}>{t("footer.consultingServices")}</a><br />
                  <a className="text-decoration-none text-white" data-id={2} href="#service" onClick={moveCarousel}>{t("footer.releaseManagement")} </a>
                  </div>
                  </p>
                </Row>
              </Col>
              <Col xs={12} lg={4} xl={3} className="d-flex flex-column align-items-center align-items-xl-start justify-content-start pt-5">
                <Row>
                  <p className="text-center text-lg-start">
                    <span className="font-thick">{t("footer.platforms")}</span><br />
                    {t("footer.amazonWeb")} <br />
                    {t("footer.salesforce")} <br />
                    {t("footer.customNodeJS")} <br />
                  </p>
                </Row>
              </Col>
              <Col xs={12} lg={4} xl={3} className="d-flex flex-column align-items-center align-items-xl-start justify-content-start pt-5">
                <Row>
                <p className="text-center text-lg-start"><span className="font-thick">{t("footer.contact")}</span><br />
                +54 911 31723434 <br />
                info@bitforce.com.ar <br />
                  </p>
                </Row>
              </Col>
            </Row>
            <hr className="px-5 mx-5"/>
            <div className="pt-4 pb-4 footer-icons-container">
              <div className="footer-icons d-flex justify-content-center">
              <Col xs="auto">
              <img
                src="icons/104452_linkedin_icon.svg"
                alt="LinkedIn"
                width="64px"
                height="64px"
              />
              </Col>
              <Col xs="auto">
              <img
                src="icons/1181205_gmail_google_mail_icon.svg"
                alt="Email"
                width="64px"
                height="64px"
              />
              </Col>
              <Col xs="auto">
              <img
                src="icons/104425_instagram_icon.svg"
                alt="Instagram"
                width="64px"
                height="64px"
              />
              </Col>
              </div>
            </div>
          </div>
      </footer>
    )
}
export default Footer