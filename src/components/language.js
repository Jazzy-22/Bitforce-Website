import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const LanguageSelector = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const [showDropdown, setShowDropdown] = useState(false);
    const [arrowRotated, setArrowRotated] = useState(false);

    const handleLanguageChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
        setShowDropdown(false);
    };

    const handleArrowClick = () => {
        setArrowRotated(!arrowRotated);
    };

    return (
        <div onClick={handleArrowClick}>
            <div className='languageSelector' onClick={() => setShowDropdown(!showDropdown)}>
                <div className="none-style languageSelector">
                    <h1 className="language-text" style={{ margin: "0px" }}>{i18n.language}</h1>
                </div>
                <div>
                    <img src="icons/icon_arrow_down_expand_blue.svg" width={"35px"} style={{ transform: arrowRotated ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </div>
                <div>
                    {showDropdown && (
                        <div className="dropdown1">
                            <div className="language-selector-text">
                                <div style={{ borderRadius: '5px 5px 0px 0px' }} className="color-selector-text" onClick={() => handleLanguageChange('ES')}>
                                    ES
                                </div>
                                <div style={{ borderRadius: '0px 0px 5px 5px' }} className="color-selector-text" onClick={() => handleLanguageChange('EN')}>
                                    EN
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;