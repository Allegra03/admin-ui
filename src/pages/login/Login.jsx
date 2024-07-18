import "./login.scss";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/darkModeContext";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";

const Login = () => { 
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  
  const { dispatch } = useContext(AuthContext);
  const { darkMode, dispatch: darkModeDispatch } = useContext(DarkModeContext);
  
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user});
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleToggleDarkMode = () => {
    darkModeDispatch({type: "TOGGLE"});
  };

  return (
    <div className="login">
      <form data-testid="form" onSubmit={handleLogin}>
        <input
          id="email"
          type="email"
          placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" data-testid="submit" className="login">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      <button className="theme" onClick={handleToggleDarkMode}>
        {darkMode ? (
          <Brightness7OutlinedIcon className="icon" />
        ) : (
          <NightsStayOutlinedIcon className="icon" />
        )}
      </button>
    </div>
  );
};

export default Login;