import { LoginFormWrapper, LoginTitle } from "modules/login/forms/LoginForm/LoginForm.styles";
import { Input } from 'commons/Input/Input';
import { ErrMessage, Spinner } from "commons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CenterElements } from "commons/CenterElements/CenterElements";
import { FormikProvider, FormikState, useFormik } from "formik";
import { LoginButton } from "modules/login/components/LoginButton/LoginButton";
import { ROUTES } from "router/paths";
import { useRegister } from "api/login/hooks/useRegister";
import { SuccessMessage } from "commons/SuccessMessage/SuccessMessage";
import { ICreateAccountValues, initialCreateAccountValues } from "./interfaces";
import { GenerateCreateAccountSchema } from "./yupSchema";


const CreateAccount = () => {
    const [errMessage, setErrMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { mutate: register, isLoading: isRegisterLoading } = useRegister();
    const navigate = useNavigate();

    const submitForm = (
        values: ICreateAccountValues,
        {
            resetForm,
        }: {
            resetForm: (
                nextState?: Partial<FormikState<ICreateAccountValues>> | undefined,
            ) => void;
        },
    ) => {
        register(values, {
            onSuccess: (res) => {
                if (res.data?.error) {
                    setErrMessage(res.data.message);
                } else {
                    setErrMessage('');
                    setSuccessMessage('Konto zostało utworzone. Możesz się zalogować!');
                }
            },
            onError: (error) => {
                console.error(error);
            },
        });

        resetForm({ values: initialCreateAccountValues });
        setName('');
        setEmail('');
        setPassword('');

    };

    const formik = useFormik({
        initialValues: initialCreateAccountValues,
        validationSchema: GenerateCreateAccountSchema,
        validateOnChange: false,
        validateOnBlur: false,
        enableReinitialize: true,
        onSubmit: submitForm,
    });

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isRegisterLoading
                ? (
                    <Spinner />
                ) : (
                    <CenterElements>
                        <FormikProvider value={formik}>
                            {errMessage && <ErrMessage errMessage={errMessage} />}
                            {successMessage && <SuccessMessage successMessage={successMessage} />}
                            <LoginFormWrapper method='POST' onSubmit={formik.handleSubmit}>
                                <LoginTitle>Dołącz do nas! &#128513;</LoginTitle>
                                <Input
                                    type='text'
                                    placeholder='Twoje imię'
                                    name='name'
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        formik.setFieldValue('name', e.target.value);
                                    }}
                                    value={name}
                                    errMessageInput={formik.errors.name}
                                />
                                <Input
                                    type='email'
                                    placeholder='Twój email'
                                    name='email'
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        formik.setFieldValue('email', e.target.value);
                                    }}
                                    value={email}
                                    errMessageInput={formik.errors.email}
                                />
                                <Input
                                    type='password'
                                    placeholder='Twoje hasło'
                                    name='password'
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        formik.setFieldValue('password', e.target.value);
                                    }}
                                    value={password}
                                    errMessageInput={formik.errors.password}
                                />
                                <LoginButton text='Dołączam!' />
                            </LoginFormWrapper>
                        </FormikProvider>
                        <Link to={`${ROUTES.LOGIN}`}>Mam już konto. Zaloguję się!</Link>
                    </CenterElements>
                )}
        </>
    );
}

export default CreateAccount;