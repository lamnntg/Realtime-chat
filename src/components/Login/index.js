import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/config";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { addDocument } from "../../firebase/services";
const provider = new GoogleAuthProvider();
// const provider = new FacebookAuthProvider();

function Login() {
  const handleFBLogin = async () => {
    await signInWithPopup(auth, provider).then((result) => {
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

  const handleGoogleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const db = getFirestore();
    await addDocument(db, {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
      providerId: user.providerData[0].providerId
    });
  }

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={6}>
          <Typography.Title>Login Chat</Typography.Title>
          <Button
            type="primary"
            style={{ width: "100%", textAlign: "center", marginBottom: "15px" }}
            onClick={handleGoogleLogin}
          >
            <GoogleOutlined />
            Đăng nhập Google
          </Button>
          <Button
            type="primary"
            style={{ width: "100%", textAlign: "center" }}
            onClick={handleFBLogin}
          >
            <FacebookOutlined />
            Đăng nhập Facebook (Error Https)
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
