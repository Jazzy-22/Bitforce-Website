import { useTranslation } from "react-i18next"
import LanguageSelector from './language';

const Courses = () => {

  const [t, i18n] = useTranslation();

  return (
    <div className="courses-cont bf-section-v-padding" id="courses">
      <div className="courses-title text-center"> {t("coursesAndDescriptions.title")}</div>

      <div className="px-5 mt-4 text-center">
        <div className="courses-white-text">
          <p>{t("coursesAndDescriptions.desc1")}</p>
          <p>{t("coursesAndDescriptions.desc2")}</p>
          <p>{t("coursesAndDescriptions.desc3")}</p>
        </div>
        <div className="d-flex flex-wrap m-auto gap-4 justify-content-center mt-5">
          <div className="d-flex gap-4">
            <div>
              <img src="logos/salesforce.svg" width="100px" />
            </div>
            <div>
              <img src="logos/Javascript_Logo 1.svg" width="80px" style={{marginTop: '-8px'}} />
            </div>
          </div>
          <div className="d-flex gap-4">
            <div>
              <img src="icons/aws.png" width="100px" />
            </div>
            <div>
              <img src="logos/react.svg" width="70px" />
            </div>
          </div>
        </div>
        <button
          className="button-bitforce mt-5"
          onClick={() => {}}
        >
          {t("coursesAndDescriptions.button")}
        </button>
      </div>

    </div>
  );
};
export default Courses;
