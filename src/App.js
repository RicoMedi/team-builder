import './App.css';
import React, {useState } from 'react';
import Form from './components/Form';


function App() {
  const[associates, setAssociates] = useState ([]);
  const [values, setValues] = useState({
    name:'',
    email:'',
    role:''
  })
  
  const onSubmit= () =>{
    setAssociates([values, ...associates]);
    setValues({ name:'',email:'', role:''});
  }
  
  const onChange= (name, value) =>{
    setValues({...values, [name] : value})
  }




  return (
    
    
    <div className="App">
        <h1>My Team Builder</h1>
    


      <Form  
      values={values}    
      change={onChange}
      submit={onSubmit}
      
      />
      {associates.map((associateList , idx) =>{
        return (
          <div key={idx}>
            {associateList.name}, {associateList.email}, {associateList.role}

          </div>
        )
      })}
 

    </div>  
  
  );
}

export default App;
