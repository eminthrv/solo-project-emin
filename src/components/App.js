import React, { Component } from 'react';
import { useState } from 'react';
// import './App.css';

function App() {
  const [inputFields, setInputFields] = useState([{ brand: '', model: '' }]);
  //console.log(inputFields);
  function addFields() {
    let newfield = { brand: '', model: '' };
    setInputFields([...inputFields, newfield]);
  };
  function handleFormChange(index, event) {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }
  function submit(event){
    event.preventDefault();
    console.log(inputFields); //eventually this inputFields will be sent to database when submit button is clicked once backend is built
  }
  function removeFields(index){
    console.log('invoked')
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  }

  return (
    <div className="App">
      <form onSubmit={submit}> 
      {/* ^^^do i really need the onSubmit here? */}
            <div>
                <h1>Input Bike Here!</h1>
            </div>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              {/* <h2>Input a bike here!</h2> */}
              <input
                name="brand"
                placeholder="Brand"
                value={input.brand}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                name="model"
                placeholder="Model"
                value={input.model}
                onChange={(event) => handleFormChange(index, event)}
              />
              <button type = "button" onClick={() => removeFields(index)}>Remove</button>
             
            </div>
          );
        })}
        <div>
            <button type="button" onClick={addFields}>Add More..</button>
            <button onClick = {submit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//       <form>
//         <div>
//             <h1>Input Bike Here!</h1>
//           <input
//             name='brand'
//             placeholder='Brand'
//           />
//           <input
//             name='model'
//             placeholder='Model'
//           />
//         </div>
//       </form>
//     </div>
//         )
//     }
// }

export default App;
