import React, { useEffect, useState } from 'react';
import Page2 from './Page2';
import data from './dishes.json';

function Page1() {
  const [showp1, setShowp1] = useState(true);
  const [meal1, setMeal1] = useState([]);
  const [Djson, setDjson ] = useState([]);
  
  useEffect(
   function  fetch(){
    setDjson(data.dishes)
   },[]);

  function toggle(event) {
    event.preventDefault();
    setShowp1(!showp1);
  }

  function InputEvent(event){
    const {id, value} = event.target;
    setMeal1([...meal1, {[id]: value}]);
  }
 
  return (<><h1>Meal Manager</h1>
    {showp1 ? <div id="Page1" >
      <form id="frmP1" >
        <label >Please Select a Meal:</label><br></br>
        <select id="Meal"  onChange={InputEvent} required>
          <option value="0" disabled selected>---</option>
          <option value="breakfast" >Breakfast</option>
          <option value="lunch" >Lunch</option>
          <option value="dinner" >Dinner</option>
        </select>
        <br></br>

        <label >Number of people:</label>
        <select id="number"  onChange={InputEvent} required>
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
        <input type="submit" onClick={toggle} class="btn btn-success " value = "Next"/>
      </form>
    </div> : <Page2
             Data={Djson}
             Mymeal = {meal1}/>}

  </>
  )
}
export default Page1;
