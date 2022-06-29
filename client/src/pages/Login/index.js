
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import LoginForm from "../../components/FormLogin";

import useAuth from "../../hooks/useAuth";
import { Heading1 } from "../../styles";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { useDispatch } from "react-redux";
import { flushSync } from "react-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function Login() {
  const { setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const axiosPrivate = useAxiosPrivate()

  const dispatch = useDispatch();

  const { getFavorites } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const from = location.state?.from?.pathname || "/";

  const onFormSubmit = async (data) => {


    try {
      const response = await axios.post("/api/login", data, {
        header: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });

      flushSync(() => {
        setAuth(response.data.user);

        
      })

      const userId = response.data.user.id
      const { data : favorites } = await axiosPrivate.get(`/api/users/${userId}/favorites`)


      if (response.data.user) getFavorites(favorites)

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
      <Heading1>Login</Heading1>
      <LoginForm onFormSubmit={onFormSubmit}></LoginForm>
    </div>
  );
}
