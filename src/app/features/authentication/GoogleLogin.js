import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import ReactDom from 'react-dom';
import GoogleLogin from 'react-google-login';

const GoogleSignIn = () => {
    const history = useHistory();

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    );

    const handleFailure = (result) => {
        alert(result);
    };

    const handleLogin = async (googleData) => {
        console.log(googleData);

        const res = await fetch('https://localhost:44339/api/account/signin-google', {
            method: 'POST',
            body: JSON.stringify({
                data: googleData.profileObj,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${googleData.tokenId}`
            },
        });

        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
        history.push("/");
    };

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
    };

    const responseGoogle = (response) => {
        console.log(response);
    };

    return (
        <>
            {
                loginData ? (
                    <div>
                        <h3>You logged in as {loginData.email}</h3>
                        <button onClick={handleLogout}>Logout</button>
                    </div >
                ) : (
                    <GoogleLogin
                        clientId="594593542565-attv3f3phm683g2m7qo92blqr7ghncvu.apps.googleusercontent.com"
                        // render={renderProps => (
                        //     <button onClick={responseGoogle} disabled={renderProps.disabled}>This is my custom Google button</button>
                        // )}
                        buttonText="Login"
                        onSuccess={handleLogin}
                        onFailure={handleFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                )
            }
        </>
    );
}

export default GoogleSignIn;