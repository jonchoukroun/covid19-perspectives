import React, { FC, useState } from "react";

import Welcome from "./welcome/Welcome";
import Cities from "./cities/Cities";

export enum ScreenName {
    "Welcome",
    "Cities",
}

export type NavCallback = (screen: ScreenName) => void;

const App: FC = () => {
    const [welcomeDisplayed, setWelcomeDisplayed] = useState(true);

    const navigateToCities: NavCallback = (screen: ScreenName) => {
        setWelcomeDisplayed(false);
    };

    return (
        <div>
            {welcomeDisplayed ? (
                <Welcome navCallback={navigateToCities} />
            ) : (
                <Cities />
            )}
        </div>
    );
};

export default App;
