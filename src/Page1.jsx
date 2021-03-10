import React, { useState } from 'react';
import Page2 from './Page2';
function Page1() {
  const [showp1, setShowp1] = useState(false);

  function toggle(event) {
    event.preventDefault();
    setShowp1(!showp1);
  }
  return (<><h1>Meal Manager</h1>
    {!showp1 ? <div id="Page1" >
      <form id="frmP1" onSubmit={toggle} >
        <label for="choosedishP1">Please Select a Meal:</label><br></br>
        <select id="choosedishP1" required>
          <option value="0" disabled selected>---</option>
          <option value="1" >Breakfast</option>
          <option value="2" >Lunch</option>
          <option value="3" >Dinner</option>
        </select>

        <br></br>

        <label for="choosepeopleP1">Number of people:</label>
        <select id="choosepeopleP1" required>
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
        <input type="submit" class="btn btn-success " value = "Next"/>
      </form>
    </div> : null};
    {showp1 ? <Page2
      showP1={showp1} /> : null}
  </>
  )
}

export default Page1;
