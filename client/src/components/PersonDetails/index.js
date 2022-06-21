import Image from "react-bootstrap/Image";

export default function PersonDetails({data}) {

    return (
        <div>
          {data ? (
            <div style={{ padding: 10 , textAlign:'center'}}>
             
    
              <Image
               src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${data.profile_path}`}
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

