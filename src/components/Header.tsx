import React, { FC } from "react";

import styled, { css } from "styled-components";
import { BreakPoints } from "../styles";

const Header: FC = () => {
    return (
        <HeaderContainer>
            <h1>U.S. Covid-19 Mortality</h1>
            <h3>...in perspective</h3>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    ${({ theme }) => css`
        border-bottom: ${theme.borders.accent};

        h1 {
            margin-bottom: 0;
            color: ${theme.colors.black};
            font-family: ${theme.fonts.heading};
            font-size: 2.7rem;
        }
        h3 {
            margin-top: 0;
            color: ${theme.colors.dark};
            font-style: italic;
        }

        @media ${BreakPoints.mobileM} {
            h1 {
                font-size: 3.5rem;
            }
        }

        @media ${BreakPoints.tablet} {
            max-width: 650px;
            margin: 7vh auto;

            h1 {
                font-size: 4rem;
            }
        }
    `}
`;

export default Header;
