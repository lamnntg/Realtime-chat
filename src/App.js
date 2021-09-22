import "./App.scss";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import AuthProviderContext from "./Contexts/AuthProviderContext";

function App() {
  return (
    <BrowserRouter>
    <AuthProviderContext>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <ChatRoom />
          </Route>
        </Switch>
      </div>
    </AuthProviderContext>
    </BrowserRouter>
  );
}

export default App;
