import React, { FC } from "react";

import { FooterNote } from "data-types";

import styled, { css } from "styled-components";

interface IFooterProps {
    content: FooterNote[];
}

const Footer: FC<IFooterProps> = ({ content }) => {
    const notes = content.map(({ num, text }) => {
        return (
            <div key={num}>
                <em>
                    <sup>{num}</sup>. {text}
                </em>
            </div>
        );
    });
    return (
        <FooterContainer>
            <small>{notes}</small>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    margin-top: auto;
    padding: 1em 0.5em;
    ${({ theme }) => css`
        border-top: ${theme.borders.default};
        color: ${theme.colors.medium};
        bottom: 0;
    `}
`;

export default Footer;
