import React, { useState } from "react"
import Page3 from "./Page3"
function Page2(props) {
  const [showp2, setShowp2] = useState(true);
  const [Fdata, setFdata] = useState([]);

  function togglep2() {

    setShowp2(() => {
      return !showp2;
    })
  };
  function Prevp1() {
    setShowp2(() => {
      return (!showp2);
    })
  }

  console.log(props.Mymeal[0].Meal)
  return (<>
    {showp2 ? <div id="Page2" >
      <form id="frmP1" >
        <label>Please Select a Restaraunt</label><br></br>
        <select id="choosedishP1" required >
          <option selected disabled>--</option>
          {
            props.Data.filter((val) => { return val.availableMeals.includes(props.Mymeal[0].Meal) }).map((val1) => {
              console.log(val1);
              return (<option>{val1.restaurant}</option>);
            })
          }

        </select>
        <br></br>
        <input type="submit" onClick={Prevp1} class="btn btn-success " value="Prev"></input>
        <input type="submit" onClick={togglep2} class="btn btn-success " value="Next"></input>
      </form>
    </div> : <Page3
        Data2={props.Data} />}
  </>
  )
};
export default Page2;