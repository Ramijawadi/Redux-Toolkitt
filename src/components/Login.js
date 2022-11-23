import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./User";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "rami",
              lastname: "jawadi",
              phone: "45879555",
            })
          )
        }
      >
        se connecter
      </button>
      <button
        onClick={() =>
          dispatch(
            logout({
             
            })
          )
        }
      >
        se deconnecter
      </button>
    </div>
  );
};

export default Login;
