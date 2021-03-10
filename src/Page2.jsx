import React, {useState} from "react"
import Page3 from "./Page3"
function Page2(props) {
  const [showp2, setShowp2]=useState(props.showP1);
  function togglep2(){
      
      setShowp2(()=>{
        return !showp2;
      })};
  

  return (<>
     {showp2 ? <div id="Page1" onSubmit={togglep2}>
      <form id="frmP1" >
        <label for="choosedishP1">Please Select a Restaraunt</label><br></br>
        <select id="choosedishP1" required>
          <option value="0" >Breakfast</option>
          <option value="0" >Lunch</option>
          <option value="2" >Dinner</option>
        </select>
        <br></br>
        <input type="submit" class="btn btn-success " value = "Next"></input>
      </form>
    </div>:null}
    {!showp2 ? <Page3
    showP2 ={showp2}/>:null}
    </>
  )
};
export default Page2;