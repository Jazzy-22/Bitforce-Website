import React from "react";
import "../index.css"
import LanguageSelector from './language';
import MobileOptions from "./mobileOptions";
import { useTranslation } from "react-i18next"

const Header = () => {

  const [t,i18n] = useTranslation();
  
  return (
    <div>
      <header className="header-container" id="header">
        <div className="header-nav-link pe-5 pe-x">
          <div className="hover-underline-animation cursor-pointer d-xxs-none d-xs-block">
            <a className="none-style" href="#service">
            <h1 className="link-no-decoration header-title">{t("header.services")}</h1>
            </a>
          </div>
          <div className="hover-underline-animation cursor-pointer d-xxs-none d-xs-block">
            <a className="none-style" href="#courses">
              <h1 className="link-no-decoration header-title">{t("header.courses")}</h1>
            </a>
          </div>
          <div className="separator d-xxs-none d-xs-block"></div>
          <div className="cursor-pointer d-xxs-none d-xs-block">
            <a className="none-style" href="#contact">
              <img className="icon-email" src="icons/icon_mail_blue.svg" />
            </a>
          </div>
          <div className="cursor-pointer languaheSelector-main">
            <div>
              <LanguageSelector />
            </div>
          </div>
          <div className="d-xxs-block d-xs-none">
            <MobileOptions />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;