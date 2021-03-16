import React, { useState } from 'react';
import Result from "./Result";

function Page3(props) {
  const [showp3, setShowp3] = useState(true);
  const [Dishfields, setDishfields] = useState([]);

  function toggleP3(event) {
    event.preventDefault();
    setShowp3(!showp3);
  }
  function InputEvent(event) {
    const { id, value } = event.target;
    props.setMydataP2({ ...props.dataP2, [id]: value })
  }

  var item = [...Dishfields];

  function Add() {
    item.push({});
    console.log(Dishfields);
    setDishfields(item);
  }

  function AddDish(i, event) {
    item[i].Dishes = event.target.value;
  }

  function AddServing(i, event) {
    item[i].Serving = event.target.value;
  }

  function Delete(id) {
    item.splice(id, 1);
    setDishfields(item);
  }

  return (<>
    { showp3 ? <div id="Page3">
      <form id="frmP3" >
        {Dishfields.map((Dishvalue, id) => {  
          return (<><label >Please Select a Dish:</label>
            <div key={`${Dishvalue}-${id}`}>
              <select id="Dishes" onChange={event => AddDish(id, event)} required>
                <option value={Dishvalue.value || ""} disabled selected>---</option>
                {props.Fdata2.map((val) => {
                  return <option value={val.name}>{val.name}</option>
                })}
              </select>
              <label>Please Select a Number of servings:</label>
              <select id="servings" onChange={event => AddServing(id, event)} required>
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
                <option value="10">10</option>
              </select>
              <input type="button" id={id} onClick={event => Delete(id, event)} value="X"/>
            </div></>)
        })}
        <br></br>
        <br></br>
        <input type="button" id="add-dish" onClick={() => Add()} value="Add" />
        <input type="submit" class="btn btn-success " value="Prev" ></input>
        <input type="submit" onClick={toggleP3} class="btn btn-success" value="Next" ></input>
      </form>
    </div> : <Result
        MyDataR={props.dataP2}
        Dishfields={Dishfields} />}
  </>
  )
};
export default Page3;
