import React from "react";
import "../index.css";
import LanguageSelector from "./language";
import { useTranslation } from "react-i18next";

import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const MobileOptions = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [t,i18n] = useTranslation();

  const goToServices = () => {
    handleClose();
  }
  return (
    <>
      <a className="none-style" onClick={handleShow}>
        <img className="icon-options" src="icons/options.svg" />
      </a>

      <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="true">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div>
                <div className="m-auto text-center">
                    <a className="text-decoration-none fs-2 text-muted" href="#service" onClick={goToServices}>{t("header.services")}</a>
                </div>
                <div className="m-auto text-center">
                    <a className="text-decoration-none fs-2 text-muted" href="#courses" onClick={goToServices}>{t("header.courses")}</a>
                </div>
                <div className="m-auto text-center">
                    <a className="text-decoration-none fs-2 text-muted" href="#contact" onClick={goToServices}>{t("header.contact")}</a>
                </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileOptions;
