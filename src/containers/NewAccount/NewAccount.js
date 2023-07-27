import { Helmet, HelmetProvider } from "react-helmet-async";
import './NewAccount.scss';
import Tab from 'components/Tab';
import InputGroup from 'components/InputGroup';
import { Button } from "components/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function NewAccount() {
    // const register = useSelector((state) => state.register);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const page = "Accounts New";
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        username: false,
        email: false,
        phoneNumber: false,
        address: false,
        password: false,
        confirmPassword: false,
    });

    const [isFocused, setIsFocused] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

    const formItem = {
        personalInfo: [
            {
                id: "firstName",
                label: "First Name",
            },
            {
                id: "lastName",
                label: "Last Name",
            },
        ],
        signUp: [
            {
                id: "username",
                label: "User Name",
            },
            {
                id: "email",
                label: "Email",
            },
            {
                id: "phoneNumber",
                label: "Phone Number",
            },
            {
                id: "address",
                label: "Address",
            },
            {
                id: "password",
                label: "Password",
                type: "password",
            },
            {
                id: "confirmPassword",
                label: "Confirm Password",
                type: "password",
            },
        ]
    };

    const handleOnChange = (e, input) => {

        const { value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [input]: value
        }));

        if (value.trim() === '') {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                [input]: true
            }));
        } else {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                [input]: false
            }));
        }

        if (input === 'email') {
            // Simple email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setFormErrors(prevErrors => ({
                ...prevErrors,
                email: !emailRegex.test(value)
            }));
        }

        if (input === 'phoneNumber') {
            // Simple phone number format validation (10 digits)
            const phoneRegex = /^\d{10}$/;
            setFormErrors(prevErrors => ({
                ...prevErrors,
                phoneNumber: !phoneRegex.test(value)
            }));
        }
    }

    const handleOnBlur = (input) => {
        setIsFocused(prevIsFocused => ({
            ...prevIsFocused,
            [input]: true
        }));
    }

    const renderError = (input, label) => {
        if (isFocused[input] && formErrors[input]) {
            return <p>{`${label} is required`}</p>;
        }

        if ((input === 'email' || input === 'phoneNumber') && formErrors[input]) {
            return <p>{`${label} is invalid`}</p>;
        }

        return null;
    };


    const handleFocus = (input) => {
        setIsFocused(prevIsFocused => ({
            ...prevIsFocused,
            [input]: false
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Error input check
        const hasErrors = Object.values(formErrors).some((error) => error);
        if (hasErrors) {
            return;
        }

        // Password matching check
        if (form.password !== form.confirmPassword) {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                confirmPassword: true
            }));
            return;
        }

        try {
            // Call API register
            await dispatch.register.registerUser({
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                phoneNumber: form.phoneNumber,
                image: null,
                address: form.address,
                username: form.username,
                password: form.password,
            });
            navigate("/login");
        } catch (error) {
            console.error("Error when register:", error);
        }
    }


    return (
        <HelmetProvider>
            <Helmet>
                <title> {page} </title>
            </Helmet>

            <div className="accounts-new">
                <Tab className="accounts-new-tab" page={page} category="Womens Dress" product="Angels malu" />
                <h1>Create New Customer Account</h1>
                <div className="accounts-new-container">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="input-control">
                            <h3>Personal Information</h3>
                            {formItem?.personalInfo.map(item => (
                                <div key={item.id} className="input">
                                    <InputGroup
                                        id={item.id}
                                        className={`${renderError(item.id, item.label) !== null ? 'input-error' : ""}`}
                                        label={item.label}
                                        placeholder={item.label}
                                        value={form[item.id]}
                                        onChange={e => handleOnChange(e, item.id)}
                                        onBlur={() => handleOnBlur(item.id)}
                                        onFocus={() => handleFocus(item.id)}
                                    />
                                    {renderError(item.id, item.label)}
                                </div>
                            ))}
                            {/* <div className="checkbox-sign-up">
                                <input id="sign-up-newsletter" type="checkbox" />
                                <label htmlFor="sign-up-newsletter">Sign Up for Newsletter</label>
                            </div> */}
                        </div>
                        <div className="input-control">
                            <h3>Sign Up for Newsletter</h3>
                            {formItem?.signUp.map(item => (
                                <div key={item.id} className="input">
                                    <InputGroup
                                        id={item.id}
                                        type={item.type}
                                        label={item.label}
                                        placeholder={item.label}
                                        value={form[item.id]}
                                        onChange={e => handleOnChange(e, item.id)}
                                        onBlur={() => handleOnBlur(item.id)}
                                        onFocus={() => handleFocus(item.id)}
                                    />
                                    {renderError(item.id, item.label)}
                                </div>
                            ))}
                        </div>

                        <div className="btn-action-form">
                            <Button
                                type="submit"
                                className="btn-action-create"
                                onClick={e => handleSubmit(e)}
                            >
                                <p>Create an account</p>
                            </Button>
                            <Button
                                type="button"
                                className="btn-action-back"
                                onClick={() => navigate("/login")}
                            >
                                Back
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default NewAccount;
