
// import classes from './login.module.css';

// function Login() {
//     return (
//         <div className={classes.login}>
//             Login
//         </div>
//     )
// }

// export default Login;

import React, { useState } from 'react';
import classes from './login.module.css';

function Login() {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    const cancelForm = () => {
        setShowLoginForm(showLoginForm)
    }

    return (
        <div>
            <div className={classes.login} onClick={toggleLoginForm}>
                Login
            </div>
            {showLoginForm && (
                <div className={classes.overlay}>
                    <form>
                        <h3>Login</h3>
                        <div className={classes.inputs}>
                            <input type='text' placeholder='Enter Usrname/Email' />
                            <input type='text' placeholder='Enter Usrname/Email' />
                        </div>
                        <div className={classes.btnDiv}>
                            <button>Login</button>
                            <button onClick={cancelForm}>Cancel</button>
                        </div>
                        <div>
                            <div>Forgot Password</div>
                            <div>Not Registere</div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Login;
