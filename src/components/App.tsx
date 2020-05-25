import React, { FC, useState } from "react";

import Header from "./Header";
import Welcome from "./Welcome";
import Cities from "./Cities";

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
            <Header />
            {welcomeDisplayed ? (
                <Welcome navCallback={navigateToCities} />
            ) : (
                <Cities />
            )}
        </div>
    );
};

export default App;
