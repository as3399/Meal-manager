import React from 'react';
import data from './dishes.json'

function Page3(props) {
  var item = [...props.Dishfields];
  const Fdata2 = data.dishes.filter((val1) => { return val1.restaurant.includes(props.Mydata.restaurant) && val1.availableMeals.includes(props.meal1.Meal)});
  
  
  function Add() {
    item.push({});
    console.log(props.Dishfields);
    props.setDishfields(item);
  }
  function Click(event) {
    event.preventDefault();
    props.showp3(3);
  }
  function AddDish(i, event) {
    var { id, value } = event.target;
    props.setMydata({ ...props.Mydata, [id]: value })
    item[i].Dishes = event.target.value;
  }

  function AddServing(i, event) {
    var { id, value } = event.target;
    props.setMydata({ ...props.Mydata, [id]: value })
    item[i].Serving = event.target.value;
  }

  function Delete(id) {
    item.splice(id, 1);
    props.setDishfields(item);
  }

  function Click1() {
    props.showp3(1);
  }
  return (<>
    <div id="Page3">
      <form id="frmP3" onSubmit={Click} >
        {props.Dishfields.map((Dishvalue, id) => {
          return (<>
            <ul class="dishcontainer">
              <li>
                <div class="dishcontainer" key={`${Dishvalue}-${id}`}>
                  <div >
                    <label >Please Select a Dish:</label>
                    <select id="Dishes" value={props.Dishfields[id].Dishes} onChange={event => AddDish(id, event)} required >
                      <option value={Dishvalue.value || ""} disabled selected>---</option>
                      {Fdata2.map((val) => {
                        return <option value={val.name}>{val.name}</option>
                      })}
                    </select> 
                    <label>Please Select a Number of servings:</label>
                    <select id="servings" value={props.Dishfields[id].Serving} onChange={event => AddServing(id, event)} required >
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
                    <input type="button" id={id} class="btn btn-danger btn-sm" onClick={event => Delete(id, event)} value="X" />
                  </div>
                </div> </li></ul></>)
        })}
        <button type="submit" class="btn btn-primary  btn-next" onClick={()=>Click} >Next ></button>
      </form>
        <button class=" btn btn-success " id="add-dish" onClick={()=> Add()}>+</button> 
        <input type="submit" class="btn btn-primary btn-prev" onClick={Click1} value=" < Prev" ></input>
    </div>

  </>
  )
}
export default Page3;
