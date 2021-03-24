import React from 'react';

function Page1(props) {

  function InputEvent(event) {
    const { id, value } = event.target;
    props.setMeal1({ ...props.meal1, [id]: value});
    props.setMydata([]);
    props.setMydata({ ...props.Mydata, [id]: value});
  }

  function Click(event) {
    event.preventDefault();
    props.meal1.Meal && props.meal1.number && props.showp1(1);
    console.log(props.meal1,"dddddd");
  }

  return (<>
    <div id="Page1" >
      <form id="frmP1" onSubmit={Click} >
        <label >Please Select a Meal:</label>
        <select id="Meal" onChange={InputEvent} value={props.meal1.Meal}>
          <option value="0" selected disabled >---</option>
          <option value="breakfast" >Breakfast</option>
          <option value="lunch" >Lunch</option>
          <option value="dinner" >Dinner</option>
        </select>
        <br></br>
        <label >Number of people:</label>
        <select id="number" onChange={InputEvent} value={props.meal1.number}>
          <option value="0" selected disabled>--</option>
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
      </form>
        <input type="submit" class="btn btn-primary btn-next" onClick={Click} value="Next >" />
    </div>
  </>
  )
}
export default Page1;
