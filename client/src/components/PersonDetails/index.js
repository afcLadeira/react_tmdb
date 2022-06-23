import Image from "react-bootstrap/Image";
import { PROFILE_URL } from "../../constants";

export default function PersonDetails({data}) {

    return (
        <div>
          {data ? (
            <div style={{ padding: 10 , textAlign:'center'}}>
             
    
              <Image
               src={`${PROFILE_URL}${data.profile_path}`}
              ></Image>
             
              <h1>{data.name}</h1>
              <p>Biography: {data.biography}</p>
              <p>Birthday: {data.birthday}</p>
              <p>Place of birth: {data.place_of_birth}</p>
          
            </div>
          ) : null}
        </div>
      );
    }

