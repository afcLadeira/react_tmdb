import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState , useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import MySpinner from "../Spinner";



const PersistLogin = () => {


    const [isLoading, setLoading] = useState(true)
    const refresh = useRefreshToken()
    const {auth} = useAuth()


    useEffect(() => {
        
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch(error) {
            console.log("🚀 ~ file: index.js ~ line 23 ~ verifyRefreshToken ~ error", error)

            }
            finally {
                setLoading(false)
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setLoading(false)
 
    },[auth?.accessToken, refresh])
    
    
    useEffect(() => {
        console.log("🚀 ~ file: index.js ~ line 40 ~ PersistLogin ~ isLoading", isLoading)
        console.log("🚀 ~ file: index.js ~ line 34 ~ PersistLogin ~ auth?.accessToken", JSON.stringify(auth?.accessToken))
        
    } , [auth?.accessToken, isLoading])


    return (
        <>
        {isLoading ? <MySpinner></MySpinner> : <Outlet></Outlet>}
        </>
    )


}

export default PersistLogin;