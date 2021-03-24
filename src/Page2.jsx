import React from "react"

function Page2(props) {

  function InputEvent(event) {
    const { id, value } = event.target;
    props.setDishfields([]);
    props.setMydata({ ...props.meal1, [id]: value });

  }

  function Click(event) {
    event.preventDefault();
    props.Mydata.restaurant && props.showp2(2);
  }
  
  function Click1(event) {
    event.preventDefault();
    props.showp2(0);
  }

  return (<>
    <div id="Page2" >
      <form id="frmP2" onSubmit={Click}>
        <label>Please Select a Restaraunt:</label>
        <select id="restaurant" onChange={InputEvent} value={props.Mydata.restaurant} required >
          <option selected disabled>--</option>
          {props.uniqueArray.map((val) => { return <option value={val.restaurant}>{val.restaurant}</option> })}
        </select>
        <br></br>
        <button type="submit" class="btn btn-primary  btn-next " onClick={()=>Click}>Next ></button>
      </form>
        <input type="submit" class="btn btn-primary btn-prev " onClick={Click1} value="< Prev"></input>
    </div>
  </>
  )
};
export default Page2;