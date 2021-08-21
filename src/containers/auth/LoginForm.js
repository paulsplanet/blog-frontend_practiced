import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, login } from "../../modules/auth";
import { withRouter } from "react-router-dom";
import { check } from "../../modules/user";

const LoginForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector( ({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    // Input Change Handler
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    // Form Register Handler
    const onSubmit = e => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(login({ username, password }));
    };

    // Initialize Form
    useEffect(() => {
        dispatch(initializeForm('login'))
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log('Error!');
            console.log('authError');
            return;
        }
        if (auth) {
            console.log('Login Success');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [history, user]);

    return (
        <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
    );
};

export default withRouter(LoginForm);