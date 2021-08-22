import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";

// Register or Login form

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: #485460;
        margin-bottom: 1rem;
    }
`;

const StyledInput =styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #485460;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: #ffc048;
        border-bottom: 1px solid #1e272e;
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: #d2dae2;
        text-decoration: underline;
        &:hover {
            color: #ffc048;
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const ErrorMessage = styled.div`
    color: #eb3b5a;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const textMap = {
    login: 'LogIn',
    register: 'Register',
}

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput autoComplete="username" name="username" placeholder="ID" onChange={onChange} value={form.username} />
                <StyledInput autoComplete="new-password" name="password" placeholder="password" type="password" onChange={onChange} value={form.password} />
                {type === 'register' && (
                    <StyledInput autoComplete="new-password" name="passwordConfirm" placeholder="confirm password" type="password" onChange={onChange} value={form.passwordConfirm} />
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan fullWidth>{text}</ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">Register</Link>
                ) : (
                    <Link to="/login">LogIn</Link>
                )}
            </Footer>
        </AuthFormBlock>
    )
}

export default AuthForm;