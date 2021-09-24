import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { app } from "../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Spin } from "antd";

export const AuthContext = React.createContext();

function AuthProviderContext({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const auth = getAuth(app);
  React.useEffect(() => {
    const unsubscibed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
        setIsLoading(false);
        history.push("/");
      } else {
        setIsLoading(false);
        // User is signed out
        history.push("/login");
      }
    });

    return () => {
      unsubscibed();
    };
  }, [history]);
  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? (
        <Spin
          size="large"
          style={{
            position: "absolute",
            left: "50%",
            bottom : "50%"
          }}
        />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export default AuthProviderContext;
