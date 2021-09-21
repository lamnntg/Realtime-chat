import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/config";
const provider = new FacebookAuthProvider();

function Login() {
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

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={24}>
          <Typography.Title>Login</Typography.Title>
          <Button
            type="primary"
            style={{ width: "100%", textAlign: "center", marginBottom: "5px" }}
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
