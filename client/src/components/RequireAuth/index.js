import { useLocation , Navigate , navigate, useNavigate, Outlet} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RequireAuth(){

    const {auth} = useAuth()
    const location = useLocation()

    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"
    //navigate(from , {replace : true})

    return (
        auth?.userName ? <Outlet></Outlet>
        :
        //<Outlet></Outlet>
        //disabled while auth not fully implemented
         <Navigate to="/login" state={{ from: location}} replace></Navigate>
    )

}