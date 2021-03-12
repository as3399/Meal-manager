import React, { useState } from 'react';
import Result from "./Result";

function Page3(props) {
  const [showp3, setShowp3] = useState(true);
  
  function toggleP3(event) {
    event.preventDefault();
    setShowp3(!showp3);
  }

  console.log(showp3);
  return (<>
    { showp3 ? <div id="Page1" >
      <form id="frmP3"  >
        <label >Please Select a Dish:</label>
        <select id="choosepeopleP3" required>
          <option value="1" selected disabled>--</option>
         {props.Data2.map((val)=>{
           return <option value={val.name}>{val.name}</option>
         })}
        </select>
        <label>Please Select a Number of servings:</label>
        <select id="choosepeopleP3" required>
          <option value="1" >1</option>
          <option value="2" >2</option>
          <option value="3" >3</option>
          <option value="4" >4</option>
          <option value="5" >5</option>
          <option value="6" >6</option>
          <option value="7" >7</option>
          <option value="8" >8</option>
          <option value="9" >9</option>
          <option value="10" >10</option>
        </select>
        <br></br>
        <button id="add-dish">+</button>
        <br></br>
        <input type="submit" class="btn btn-success " value="Prev" ></input>
        <input type="submit" onClick={toggleP3} class="btn btn-success " value="Next" ></input>
      </form>
    </div> : <Result />}
  </>
  )
};


export default Page3;
