import React, { FC, MouseEvent } from "react";
import Footer from "./Footer";

import { deathCount, deathRate } from "../data/deathCount";
import { ScreenName, NavCallback } from "./App";
import { formatNumber } from "../utils/numbers";

import { deathRateNote } from "../data/deathCount";

import styled from "styled-components";
import { BreakPoints } from "../styles";

interface IWelcomeProps {
    navCallback: NavCallback;
}

const Welcome: FC<IWelcomeProps> = ({ navCallback }) => {
    const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    const startDate = new Date(deathCount[0].date).toLocaleDateString(
        "en-us",
        dateOptions
    );
    const { totalDeaths, avgDeaths } = deathRate();

    const clickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        navCallback(ScreenName.Cities);
    };

    return (
        <div className="content">
            <p>
                Since {startDate}, {formatNumber(totalDeaths)} Americans have
                died. That's an average of {formatNumber(avgDeaths)} deaths per
                day<sup>1</sup>.
            </p>

            <p>
                It's difficult to put these numbers in perspective, so this
                project aims to make the toll of Covid-19 easier to understand.
            </p>

            <ButtonRow>
                <button type="button" onClick={clickHandler}>
                    Continue
                </button>
            </ButtonRow>

            <Footer content={deathRateNote} />
        </div>
    );
};

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 1em 0;

    @media ${BreakPoints.mobileM} {
        margin: 3em 0;
    }

    @media ${BreakPoints.tablet} {
        margin: 4em 0 0;
    }
`;

export default Welcome;
