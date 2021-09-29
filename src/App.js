import "./App.scss";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import AuthProviderContext from "./Contexts/AuthProviderContext";
import AppProviderContext from "./Contexts/AppProviderContext";
import AddRoomModal from "./components/Modal/AddRoomModal";

function App() {
  return (
    <BrowserRouter>
    <AuthProviderContext>
      <AppProviderContext>
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
        <AddRoomModal />
      </AppProviderContext>
    </AuthProviderContext>
    </BrowserRouter>
  );
}

export default App;
