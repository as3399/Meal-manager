import React from 'react';

function Result(props){ 
    // const [show , setShow] = useState(true)
    // const onSubmit =(event) =>{
    //   event.preventDefault(); }
return(<>
    <div id="ResultPage" >
        <div id="container">   
        <div> <b>Meal </b>                        :  {props.MyDataR.Meal}</div>
       <div><b> No. of People </b>               :  {props.MyDataR.number}</div>
       <div><b> Restaraunt</b>                   : {props.MyDataR.restaurant}</div>
       <div> <b>Dishes</b>                       : {props.MyDataR.Dishes}</div>
       <div> <b>Servings</b>                     : {props.MyDataR.servings}</div>
     </div>
     </div>

     <button class="btn btn-success">Prev</button>
     </>
)};

export default Result;
