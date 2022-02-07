import React, { useState, useContext } from "react";
import { provider } from "../firebase";
import { signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";
import { UserContext } from "./UserContext";
import Button from "@mui/material/Button";

// import { Button } from "@material-ui/core";

function Signin() {
  const { value, setValue } = useContext(UserContext);

  function signInWithGoogle() {
    signInWithRedirect(auth, provider);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={signInWithGoogle}
      >
        Connectez-Vous Avec Votre Compte Google
      </Button>
      <Button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={() => setValue(true)}
      >
        Tester En Tant Qu'Invité
      </Button>
    </div>
  );
}

export default Signin;
