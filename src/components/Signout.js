import React, { useContext } from "react";
import { auth } from "../firebase";
import Button from "@mui/material/Button";
import { UserContext } from "./UserContext";

function Signout() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        backgroundColor: "#FAFAFA",
        top: 0,
        borderBottom: "solid 1px lightgray",
        zIndex: "10",
      }}
    >
      <Button
        style={{
          padding: "20px",
          fontSize: "15px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={() => {
          if (value) {
            setValue(false);
          } else {
            auth.signOut();
          }
        }}
      >
        Se Déconnecter
      </Button>
    </div>
  );
}

export default Signout;
