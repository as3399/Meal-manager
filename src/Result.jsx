import React from 'react';

function Result(props){
    function Click (event){
        event.preventDefault();
        props.showp4(2);
     } 
function Submit(event){
    event.preventDefault();
    props.showp4(4);
}
 
return(
<>
    <div id="ResultPage" >
        <div id="container">   
        <div> <b>Meal </b>  :  {props.MyData.Meal}</div>
       <div><b> No. of People </b> :  {props.MyData.number}</div>
       <div><b> Restaraunt</b> : {props.MyData.restaurant}</div>
       <div><b>Dishes:</b> <ul>{props.Dishfields.map((id)=>{return (<li>{id.Dishes} -- {id.Serving} Servings</li>)})}</ul></div>
     </div>
     </div>
     <input type="button" class="btn btn-primary btn-prev" onClick={Click} value="< Prev"/>
     <input type="button" class="btn btn-success btn-next" onClick={Submit} value="Submit"/>

     </>
)};

export default Result;
