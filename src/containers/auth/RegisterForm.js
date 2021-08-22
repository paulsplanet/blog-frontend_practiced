import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm, register } from "../../modules/auth";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";

const RegisterForm = ({ history }) => {
    const [error, setError] = useState(null);
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
        if ([username, password, passwordConfirm].includes('')) {
            setError('Fill out all the required areas');
            return;
        }
        if (password !== passwordConfirm) {
            setError('Password doesn\' match');
            dispatch(changeField({ form: 'register', key: 'password', value: '' }));
            dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: ''}));
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
            if (authError.response.status === 409) {
                setError('This is already existing ID');
                return;
            }
            setError ('Register Failure');
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
            history.push('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('localStorage is not working');
            }
        }
    }, [history, user])

    return (
        <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
    );
};

export default withRouter(RegisterForm);