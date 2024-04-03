import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import noNN from './nn.json';
import noNB from './no.json';
import enUK from './en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            no: {
                translations: noNB
            },
            nn: {
                translations: noNN
            },
            en: {
                translations: enUK
            }
        },
        fallbackLng: "no",
        debug: true,

        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: '.',

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;