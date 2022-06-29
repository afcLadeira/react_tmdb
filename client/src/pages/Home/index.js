import { useState } from "react";
import MostPopular from "../../components/MostPopular";
import SearchForm from "../../components/SearchForm";


export default function Home() {
const [showPopular , setShowPopular] = useState(false) 



return (
    <div>
        <SearchForm setShowPopular={setShowPopular}></SearchForm>
      {showPopular &&  <MostPopular></MostPopular>}
    </div>
)
   
}