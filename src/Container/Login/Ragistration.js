import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../Config';

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Navigat = useNavigate()

    let schema = yup.object().shape({
        email: yup.string().email("Please Enter Valid Email.").required("Please Enter Your Email."),
        password: yup.string().required("Please Enter Your Password.")
    });

    // const onclickhandler = async () => {
    //     try {
    //         const data = await signInWithPopup(auth, provider);
    //         localStorage.setItem("Dlogin", JSON.stringify(data));
    //         Navigat('/docter');
    //         console.log("data++", data);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    const Singup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log(userCredential);
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        sendEmailVerification(user);
                    } else {

                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Ragistration</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    {/* <div className="mx-auto col-md-4 form-group mt-3 mt-md-0">
                        <GoogleLoginButton onClick={onclickhandler} />
                    </div> */}
                    <form onSubmit={Singup} action method="post" role="form" className="php-email-form">

                        <div className="mx-auto col-md-4 form-group mt-3 mt-md-0">
                            <input type="name"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mx-auto col-md-4 form-group mt-3 mt-md-0">
                            <input type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mx-auto col-md-4 form-group mt-3 mt-md-0">
                            <input type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Your Password"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="text-center"><button type="submit">Registration</button></div>
                        <p className='left-padding'>
                            Already have an account ? <a href='/login'>Login</a>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;

{/* <div className="container">
    <div className="col-12 mt-5 mt-lg-0">
        <Formik values={formik}>
            <Form onSubmit={handleSubmit} className="php-email-form">

                <div className="mx-auto col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} />
                    <p style={{ color: "red" }}>{errors.email && touched.email ? errors.email : ''}</p>
                </div>

                <div className="mx-auto col-md-6 form-group">
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} />
                    <p style={{ color: "red" }}>{errors.password && touched.password ? errors.password : ''}</p>
                </div>

                <div className="text-center"><button type="submit">Login</button></div>

            </Form>
        </Formik>
    </div>
</div> */}