import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import English from "./translations/en.json";
import Spanish from "./translations/es.json";

const resources = {
    EN: {
        translation: English,
    },
    ES: {
        translation: Spanish,
    },
}

i18next.use(initReactI18next)
.init({
  resources,
  lng:"EN",
});

export default i18next;