import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import noImage from '../../assets/noImage.png'

export default function Credits({ credits }) {


  let navigate = useNavigate()

  let groupDepartments = {};
  if (credits) {
    groupDepartments = [...credits.crew].reduce((accumulator, currentValue) => {
      if (accumulator[currentValue.department]) {
        let tempArray = [...accumulator[currentValue.department]];

        accumulator[currentValue.department] = [...tempArray, currentValue];
      } else {
        accumulator[currentValue.department] = [currentValue];
      }

      return accumulator;
    }, {});
  }

  return (
    <div>

      <div >
      {credits ? <div className="m-t-b-50">
        <h2 style={{textAlign:'center'}}>Cast</h2>
        <div className="m-t-b-50" style={{ display: "flex", gap: 20, flexWrap: "wrap" , justifyContent:'center' }}>
        {credits.cast.map((person) => (
              <div className="zoom c-pointer" onClick={() => navigate(`/person/${person.id}`)}>
                <Image
                  src={person.profile_path ? `https://www.themoviedb.org/t/p/w276_and_h350_face/${person.profile_path}` : noImage}
                ></Image>
                <p>{person.name}</p>
                <p>{person.character}</p>
              </div>
            ))
         } </div> </div>: null}
      </div>

      {Object.keys(groupDepartments).length > 0 ? (
        <div className="m-t-b-50" style={{ textAlign: "center" }}>
          <h2>Technical Crew</h2>
          <div className="m-t-b-50"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            {Object.keys(groupDepartments).map((c) => (
              <div>
                <h5>{c}</h5>
                {groupDepartments[c].map((a) => (
                  <p>
                    <span>{a.name}</span>
                    <span>({a.job})</span>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
