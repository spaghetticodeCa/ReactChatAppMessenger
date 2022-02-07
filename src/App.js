import "./App.css";
import Signin from "./components/Signin";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <Chat /> : <Signin />}</>;
}

export default App;
