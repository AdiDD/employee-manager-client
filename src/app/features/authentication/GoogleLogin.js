import React from 'react';
import ReactDom from 'react-dom';
import GoogleLogin from 'react-google-login';

const GoogleSignIn = () => {

    const handleFailure = (result) => {
        alert(result);
    };

    const responseGoogle = (response) => {
        console.log(response);
    };

    return (

        <GoogleLogin
            clientId="594593542565-attv3f3phm683g2m7qo92blqr7ghncvu.apps.googleusercontent.com"
            // render={renderProps => (
            //     <button onClick={responseGoogle} disabled={renderProps.disabled}>This is my custom Google button</button>
            // )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
        />

    );
}

export default GoogleSignIn;