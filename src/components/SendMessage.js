import React, { useState, useContext } from "react";
import { db, auth } from "../firebase";
import { collection, serverTimestamp, doc, addDoc } from "firebase/firestore";
import { Input, Button } from "@mui/material";
import { FirebaseError } from "firebase/app";
import { UserContext } from "./UserContext";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");
  const { value, setValue } = useContext(UserContext);

  async function sendMessage(e) {
    e.preventDefault();
    console.log("value: ", value);
    if (value == false) {
      const { uid, photoURL } = auth.currentUser;
    }

    const uid = 1;

    const photoURL =
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png";

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "messages"), {
      text: msg,
      photoURL,
      uid,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);

    // await db.collection("messages").add({
    //   text: msg,
    //   photoURL,
    //   uid,
    //   createdAt: serverTimestamp(),
    // });
    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            placeholder="Message..."
          />
          <Button
            style={{
              width: "18%",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
            }}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
