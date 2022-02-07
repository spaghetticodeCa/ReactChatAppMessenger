import "./App.css";
import Signin from "./components/Signin";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserContext } from "./components/UserContext";
import { useContext, useState } from "react";

function App() {
  const [user] = useAuthState(auth);
  const [value, setValue] = useState(false);

  return (
    <>
      <UserContext.Provider value={{ value, setValue }}>
        {user || value ? <Chat /> : <Signin />}
      </UserContext.Provider>
    </>
  );
}

export default App;
