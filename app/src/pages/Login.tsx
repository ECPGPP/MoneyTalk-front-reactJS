import React, { useEffect, useRef, useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { AxiosError } from "axios";
import "../assets/AuthFormContainer.scss";
import "../assets/Login.scss";
import { get } from "http";

function Login(props: any) {
  // state
  const LOGIN_URL = "/api/login_check";
  const GETUSER_URL = "/api/user";

  const setAuth: any = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [cookies, setCookies, removeCookies] = useCookies();
  const navigate = useNavigate();

  //TODO: pas fifou les useref, to replace
  const userRef: any = useRef();
  const errRef: any = useRef();

  // behavior
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          // CORS handling EZ, to rework
          withCredentials: false,
          // withCredentials: true
        }
      );
      //console.log(response);
      setEmail("");
      setUsername("");
      setPassword("");
      const data = response.data;
      //TODO : setAuth({email, password, roles, accessToken});
      // setAuth({ email, accessToken });
      setCookies("token", response.data.token);
      getUser(data);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 400) {
          setErrMsg("Missing email or password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else if (err.response?.status === 402) {
          setErrMsg("Login Failed");
        } else {
          setErrMsg("Server Error");
        }
      }
      errRef.current.focus();
    }
  };

  const getUser = async (data: any) => {
    //getUSer
    try {
      const res = await axios
        .get(GETUSER_URL, {
          headers: {
            Authorization: "Bearer " + data.token,
          },
        })
        .then((res) => {
          console.log(res);
          setCookies('message', res.data.message);
          setCookies('email', res.data.user.email);
          setCookies("username", res.data.user.email);
          setCookies("roles", res.data.user.roles);
          setCookies("moneyPotId", res.data.user.moneyPot?.id);

          //redirect to MoneyPot/
          navigate("/money_pot");
        });
    } catch (err: unknown) {
      console.log(err);
      navigate("/login");
    }
  };

  const handleChange = (e: any) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
      setUsername(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  //here [] is a dependancy array
  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  //if email or password is changed, we empty errMsg
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  // render
  return (
    <div className="login">
      <div className="auth-form-container login">
        <fieldset>
          {/* aria-live:assertive : announce errMsg immediately to a screen reader */}
          <p
            ref={errRef}
            className={errMsg ? "errormsg" : "offscreen"}
            aria-live="assertive"
          >
            {" "}
            {errMsg}
          </p>

          <legend>Login</legend>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <br />
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="youremail@skeggang.net"
              required
            />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <input
              id="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="yourpassword"
              required
            />
            <br />
            <button>Submit 🤟</button>
          </form>
        </fieldset>
        <button onClick={() => props.onFormSwitch("registerForm")}>
          {" "}
          Don't have an account ? Register ✍️
        </button>
      </div>
    </div>
  );
}

export default Login;
