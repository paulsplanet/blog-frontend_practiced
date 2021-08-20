import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm } from "../../modules/auth";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector( ({ auth }) => ({
        form: auth.register
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
    };

    // Initialize Form
    useEffect(() => {
        dispatch(initializeForm('register'))
    }, [dispatch]);

    return (
        <AuthForm type="register" form={form} onChange={onChange} onSubmit={onsubmit} />
    );
};

export default RegisterForm;