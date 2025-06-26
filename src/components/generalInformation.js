import React from "react";
import "../index.css"
import LanguageSelector from './language';
import { useTranslation } from "react-i18next"

const GeneralInformation = () => {
    const [t,i18n] = useTranslation();

    return (
        <div className="general-info-container overflow-hidden px-5 bf-section-v-padding">
            <div className="d-flex flex-column flex-lg-row">
                <div className="bf-grl-info-half">
                    <div className="general-info-image-container ">
                        <div className="general-info-image-transparency position-absolute"></div>
                        <div className="general-info-image">
                            <img src="logos/bitforce-white.svg" alt="BitForce Logo" width="700px" />
                        </div>
                    </div>
                </div>
                <div className="bf-grl-info-half">
                    <div className="general-info-text-title">
                        The Real Bit Force
                    </div>

                    <div className="general-info-text-strong mt-5">
                        - {t("theRealBitforce.title1")}
                    </div>
                    <div className="general-info-text mt-3">
                        {t("theRealBitforce.desc1")}
                    </div>

                    <div className="general-info-text-strong mt-4">
                        - {t("theRealBitforce.title2")}
                    </div>
                    <div className="general-info-text mt-3" >
                        {t("theRealBitforce.desc2")}
                    </div>

                    <div className="general-info-text-strong mt-4">
                        - {t("theRealBitforce.title3")}
                    </div>
                    <div className="general-info-text mt-3" >
                        {t("theRealBitforce.desc3")}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GeneralInformation;