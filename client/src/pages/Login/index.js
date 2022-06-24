import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/FormLogin";

import useAuth from "../../hooks/useAuth";

export default function Login() {
  const { setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onFormSubmit = async (data) => {


    try {
      const response = await axios.post("/api/login", data, {
        header: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });


      setAuth(response.data.user);

      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);

      if (!error?.response) {
        console.log("no server response");
      } else if (error.response?.status === 400) {
        console.log("missing username or password");
      } else if (error.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("login failed");
      }
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Login</h1>
      <LoginForm onFormSubmit={onFormSubmit}></LoginForm>
    </div>
  );
}
