import React, { useState } from "react"
import Page3 from "./Page3"
function Page2(props) {
  const [showp2, setShowp2] = useState(true);

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
  function InputEvent(event) {
    const { id, value } = event.target;
    props.setMydata({ ...props.Mydatastate, [id]: value });
  }
  return (<>
    {showp2 ? <div id="Page2" >
      <form id="frmP1" >
        <label>Please Select a Restaraunt</label><br></br>
        <select id="restaurant" onChange={InputEvent} required>
          <option selected disabled>--</option>
          {props.Fdata.map((val) => { return <option value={val.restaurant}>{val.restaurant}</option> })}
        </select>
        <br></br>
        <input type="submit" onClick={Prevp1} class="btn btn-success " value="Prev"></input>
        <input type="submit" onClick={togglep2} class="btn btn-success " value="Next"></input>
      </form>
    </div> : <Page3
        Fdata2={props.Fdata} setMydataP2={props.setMydata} dataP2={props.Mydata}/>}
  </>
  )
};
export default Page2;