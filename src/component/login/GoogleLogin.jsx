import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { Details } from "../login/DetailsProvider";

const GLogin = ({ children }) => {
  const { responseSuccess, resFailure } = Details();
  const clientId = "334230348450-0m7c64tcrrustt3n8euqd7608fkn8198.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId: clientId,
        cookie_policy: 'single_host_origin'
      });
    });
  }, []);

  return (
    <>
      <div>
        <div className="googleLogin">
          <GoogleLogin
            clientId={clientId}
            buttonText="Sing in with google"
            onSuccess={responseSuccess}
            onFailure={resFailure}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </>
  );
};

export default GLogin;
