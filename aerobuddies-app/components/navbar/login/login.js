


import React, { useState } from 'react';
import classes from './login.module.css';

function Login() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setShowForgotPasswordForm(false); // Hide forgot password form when toggling login form
    };

    const toggleForgotPasswordForm = () => {
        setShowForgotPasswordForm(!showForgotPasswordForm);
        setShowLoginForm(false); // Hide login form when toggling forgot password form
    };

    const cancelForm = () => {
        setShowLoginForm(false);
    };

    const cancelForgotPasswordForm = () => {
        setShowForgotPasswordForm(false);
    };

    return (
        <div className={classes.divLogin}>
            <div className={classes.login} onClick={toggleLoginForm}>
                Login
            </div>
            {showLoginForm && (
                <div className={classes.overlay}>
                    <form>
                        <h1>Login</h1>
                        <div className={classes.inputsDiv}>
                            <input type='text' placeholder='Enter Username/Email' />
                            <input type='text' placeholder='Enter password' />
                        </div>
                        <div className={classes.btnDiv}>
                            <button className={classes.loginBtn}>Login</button>
                            <button className={classes.cancelLoginButton} onClick={cancelForm}>Cancel</button>
                        </div>
                        <div className={classes.forgotPswrd} onClick={toggleForgotPasswordForm}>Forgot Password</div>
                    </form>
                </div>
            )}
            {showForgotPasswordForm && (
                <div className={classes.overlayFogotPassword}>
                    <form>
                        <h1>Reset password</h1>
                        <div className={classes.inputsDiv}>
                            <input type='text' placeholder='Enter Username/Email' />
                        </div>
                        <div className={classes.btnDiv}>
                            <button className={classes.forgotPswrdBtn}>Email me new password</button>
                            <button className={classes.cancelForgotPaswrdButton} onClick={cancelForgotPasswordForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Login;

