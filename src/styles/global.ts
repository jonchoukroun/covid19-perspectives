import { createGlobalStyle, css } from "styled-components";
import { BreakPoints } from "./";

export default createGlobalStyle`
    ${({ theme }) => css`
        html {
            height: 100%;

            body {
                display: flex;
                flex-direction: column;
                flex: 1;
                height: 100%;
                margin-top: 0;
                margin-bottom: 0;
                background: ${theme.colors.light};
                color: ${theme.colors.dark};
                font-family: ${theme.fonts.body}, sans-serif;

                #root {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    align-items: center;
                    height: 100%;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-content: start;
                    height: 90%;
                    margin-top: 1em;

                    @media ${BreakPoints.tablet} {
                        max-width: 600px;
                    }
                }

                button {
                    width: 100%;
                    padding: 0.5em 1em;
                    background-color: ${theme.colors.dark};
                    color: ${theme.colors.light};
                    font-family: ${theme.fonts.body};
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    border: none;
                    border-radius: 2px;
                    box-shadow: ${theme.boxShadows.default};
                }

                @media ${BreakPoints.tablet} {
                    button {
                        width: auto;
                        padding: 0.5em 2.5em;
                    }
                }

                @media (hover) {
                    button {
                        transition: all 0.2s;

                        &:hover {
                            box-shadow: ${theme.boxShadows.elevated};
                        }
                    }
                }
            }
        }
    `}
`;
