import { Button } from "@material-ui/core";
import React, { useEffect, useReducer } from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  const signInHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        // console.log(user);
        localStorage.setItem(
          "user",
          JSON.stringify({ name: user.displayName, photo: user.photoURL })
        );
        dispatch({
          type: "SET__USER",
          payload: { name: user.displayName, photo: user.photoURL },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="child__div">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt=""
        />
        <h4>Login Your Facebook</h4>
        <Button
          onClick={signInHandler}
          variant="contained"
          className=""
          color="primary"
        >
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
