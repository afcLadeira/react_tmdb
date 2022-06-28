import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import MySpinner from "../Spinner";

const PersistLogin = () => {
  const [isLoading, setLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
       
      } finally {
        setLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setLoading(false);
  }, [auth?.accessToken, refresh]);

  return <>{isLoading ? <MySpinner></MySpinner> : <Outlet></Outlet>}</>;
};

export default PersistLogin;
