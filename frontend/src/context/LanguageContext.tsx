import React, {createContext, useState, useContext} from "react";
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
    ex: {
        translation: {
            "welcome": "Welcome",
            "login": "Login",
            "register": "Register"
        }
    },
    pl: {
        translation: {
            "welcome": "Witaj",
            "login": "Zaloguj się",
            "register": "Zarejestruj się"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

type Language = 'en' | 'pl';

interface LanguageContextType {
    language: Language;
    changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    changeLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [language, setLanguage] = useState<Language>(() => {
        const saveLanguage = localStorage.getItem('language') as Language;
        return saveLanguage || 'en';
    });

    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);