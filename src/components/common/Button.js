import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background-color: #d1d8e0;
    &:hover {
        background-color: #778ca3;
    }
    ${props => props.fullWidth && css`
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 100%;
        font-size: 1.5rem;
    `}
    ${props => props.cyan && css`
        background-color: #ffc048;
        &:hover {
            background-color: #ffa801;
        }
    `}
`;

const Button = props => <StyledButton {...props} />;

export default Button;