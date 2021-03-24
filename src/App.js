import React, { useEffect, useState } from 'react';
import './App.css';
import './dishes.json'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Result from './Result'
import data from './dishes.json';
import Message from './Message';

function App() {
  const [show, setShow] = useState(0);
  const [meal1, setMeal1] = useState([]);
  const [Dishfields, setDishfields] = useState([]);
  const [Mydata, setMydata] = useState();
  const [MyJson, setMyJson] = useState([]);

  useEffect(() => {
    setMyJson(data.dishes);
    console.log(MyJson);
  });
  var style = {};
  var style2 = {};
  var style3 = {};
  var style4 = {};
  var style5 = {};

  const Fdata1 = MyJson.filter((val) => { return val.availableMeals.includes(meal1.Meal) });

  function removeduplicates(originalArray, property) {
    var newArr = [];
    var newobj = {};

    for (var i in originalArray) {
      newobj[originalArray[i][property]] = originalArray[i];
    }
    console.log(newobj, "dddddddddddddddddddd");

    for (var i in newobj) {
      newArr.push(newobj[i])
    }
    return newArr;
  }

  var uniqueArray = removeduplicates(Fdata1, "restaurant");

  return (
    <>
      <h1>Meal Manager</h1>
      <div className="stepbox" style={style5}>
        <div class="steps" style={style} id="step1">Step1</div>
        <div class="steps" style={style2} id="step2">Step2</div>
        <div class="steps" style={style3} id="step3">Step3</div>
        <div class="steps" style={style4} id="step4">Step4</div>
      </div>

      { show == 0 &&
        ((style.backgroundColor = "rgb(185, 66, 66)", style.color = "white"), <Page1
          Mydata={Mydata}
          meal1={meal1}
          setMeal1={setMeal1}
          showp1={setShow}
          setMydata={setMydata}
        />)
      }

      { show == 1 &&
        ((style2.backgroundColor = "rgb(185, 66, 66)", style2.color = "white"), <Page2
          uniqueArray={uniqueArray}
          Fdata1={Fdata1}
          meal1={meal1}
          setMeal1={setMeal1}
          setMydata={setMydata}
          setDishfields={setDishfields}
          showp2={setShow}
          Mydata={Mydata} />)}

      { show == 2 && ((style3.backgroundColor = "rgb(185, 66, 66)", style3.color = "white"), <Page3
        Fdata1={Fdata1}
        showp3={setShow}
        meal1={meal1}
        setMydata={setMydata}
        Mydata={Mydata}
        setDishfields={setDishfields}
        Dishfields={Dishfields}
      />)}

      { show == 3 &&
        ((style4.backgroundColor = "rgb(185, 66, 66)", style4.color = "white"), <Result
          showp4={setShow}
          MyData={Mydata}
          Dishfields={Dishfields} />)}

      { show == 4 && ((style5.display = "none"), <Message />)}
    </>
  );
}
export default App;
