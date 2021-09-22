import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useHistory } from "react-router-dom";

const provider = new GoogleAuthProvider();
// const provider = new FacebookAuthProvider();

function Login() {
  const history = useHistory();
  const handleFBLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      // The signed-in user info.
      // const user = result.user;
      console.log(result)
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
  

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={24}>
          <Typography.Title>Login</Typography.Title>
          <Button
            type="primary"
            style={{ width: "100%", textAlign: "center", marginBottom: "5px" }}
            onClick={handleGoogleLogin}
          >
            Đăng nhập bằng google
          </Button>
          <Button
            type="primary"
            style={{ width: "100%", textAlign: "center" }}
            onClick={handleFBLogin}
          >
            Đăng nhập bằng facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
