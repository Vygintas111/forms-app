import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import { store } from './store'
import {ThemeProvider} from "./context/ThemeContext.tsx";
import {LanguageProvider} from "./context/LanguageContext.tsx";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <LanguageProvider>
                    <App />
                </LanguageProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
)

// i finished phase 1, but im having an error in main.tsx file: "TS2307: Cannot find module './store' or its corresponding type declarations.", because 'frontend/src/store/slices/authSlice.ts'  "/store" is a directory and i dont really understand what is being imported or what is wrong