import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useRefreshToken from "../../hooks/useRefreshToken";


export default function SandBox() {

    const refresh = useRefreshToken()
    console.log("🚀 ~ file: useAxiosPrivate.js ~ line 11 ~ useAxiosPrivate ~ refresh", refresh)

    const {auth} = useAuth()
    console.log("🚀 ~ file: useAxiosPrivate.js ~ line 13 ~ useAxiosPrivate ~ auth", auth)

    console.log('here')


    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        async function fetchData() {
            
          const { data } = await axiosPrivate.get('/api/users', 
        //   {
        //     headers: {
        //       'Authorization': `Bearer ${auth.accessToken}` 
        //     }
        //   }
           );
            console.log('DATA USERS PRIVATE' , data)
        }
    
        fetchData();
      }, [axiosPrivate]);


}