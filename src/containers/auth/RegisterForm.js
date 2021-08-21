import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, register } from "../../modules/auth";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";

const RegisterForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector( ({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    // Input Change Handler
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    // Form Register Handler
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        if (password !== passwordConfirm) {
            return;
        };
        dispatch(register({ username, password }));
    };

    // Initialize Form
    useEffect(() => {
        dispatch(initializeForm('register'))
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log("Error!");
            console.log(authError);
            return;
        }
        if (auth) {
            console.log("Register Success");
            console.log("auth");
            dispatch(check());
        }   
    }, [auth, authError, dispatch])

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [history, user])

    return (
        <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />
    );
};

export default withRouter(RegisterForm);