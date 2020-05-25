import React, { FC, MouseEvent } from "react";

import { deathCount, deathRate } from "../../data/deathCount";
import { ScreenName, NavCallback } from "../App";

import styled, { css } from "styled-components";

interface IWelcomeProps {
    navCallback: NavCallback;
}

const Welcome: FC<IWelcomeProps> = ({ navCallback }) => {
    const startDate = new Date(deathCount[0].date).toDateString();
    const { days, totalDeaths, avgDeaths } = deathRate();

    const clickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        navCallback(ScreenName.Cities);
    };

    return (
        <WindowContainer>
            <HeaderContainer>
                <h1>U.S. Covid-19 Deaths</h1>
                <h3>...in Perspective</h3>
            </HeaderContainer>

            <p>
                Since {startDate} the U.S. has experienced {totalDeaths} deaths.
                Over a period of {days} days, that's an average of {avgDeaths}{" "}
                lives lost each day.
            </p>

            <br />
            <p>
                It's difficult to put these numbers is perspective, so this
                project aims to make the toll of Covid-19 easier to understand.
            </p>

            <button type="button" onClick={clickHandler}>
                Continue
            </button>
        </WindowContainer>
    );
};

const WindowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeaderContainer = styled.div`
    ${({ theme }) => css`
        h1 {
            color: ${theme.colors.darkGray};
        }
        h2 {
            color: ${theme.colors.green};
        }
    `}
`;

export default Welcome;
