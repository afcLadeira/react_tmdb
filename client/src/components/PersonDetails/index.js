import Image from "react-bootstrap/Image";
import { PROFILE_URL } from "../../constants";
import { Heading1 } from "../../styles";

export default function PersonDetails({data}) {

    return (
        <div>
          {data ? (
            <div style={{ padding: 10 , textAlign:'center'}}>
             
    
              <Image
               src={`${PROFILE_URL}${data.profile_path}`}
              ></Image>
             
              <Heading1>{data.name}</Heading1>
              <p>Biography: {data.biography}</p>
              <p>Birthday: {data.birthday}</p>
              <p>Place of birth: {data.place_of_birth}</p>
          
            </div>
          ) : null}
        </div>
      );
    }

