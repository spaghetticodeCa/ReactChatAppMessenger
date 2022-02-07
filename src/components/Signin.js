import React from "react";
import { provider } from "../firebase";
import { signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase";

import Button from "@mui/material/Button";

// import { Button } from "@material-ui/core";

function Signin() {
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
    </div>
  );
}

export default Signin;
