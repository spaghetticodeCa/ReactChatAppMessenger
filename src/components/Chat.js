import React, { useState, useEffect, useRef, useContext } from "react";
import { db, auth } from "../firebase";
import Signout from "./Signout";
import {
  doc,
  onSnapshot,
  collection,
  orderBy,
  limit,
  query,
  where,
} from "firebase/firestore";
import { UserContext } from "./UserContext";
import SendMessage from "./SendMessage";
import { useTabContext } from "@mui/base";

function Chat() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const { value, setValue } = useContext(UserContext);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc"),
      limit(25)
    );

    const unsub = onSnapshot(q, (snapshot) =>
      setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);
  return (
    <div>
      <Signout />
      <div className="msgs">
        {auth.currentUser != null
          ? messages.map(({ id, text, photoURL, uid }) => (
              <div key={id}>
                <div
                  className={`msg ${
                    uid === auth.currentUser.uid ? "sent" : "received"
                  }`}
                >
                  <img src={photoURL} alt="" />
                  <p>{text}</p>
                </div>
              </div>
            ))
          : messages.map(({ id, text, photoURL }) => (
              <div key={id}>
                <div className={`msg ${"received"}`}>
                  <img src={photoURL} alt="" />
                  <p>{text}</p>
                </div>
              </div>
            ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
