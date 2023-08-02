import React, { useState } from "react";


export default function Form(props){

    
    const handleChange= event=> {
    const { name , value }= event.target;
    props.change(name,value);
    }

    const handleSubmit = event => {
    event.preventDefault();
    props.submit()
}
 return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                &nbsp;  
            <input 
             placeholder="Enter your name"
             value={props.values.name}
             name="name"
             onChange={handleChange}
             
            />
             </label>  
             <label>
                Email:&nbsp; 
                <input
                
                placeholder="Enter Email"
                value={props.values.email}
                name="email"
                onChange={handleChange}
                />  
             </label>
             
             <label>
                Role:
                &nbsp;
                <input
                placeholder="role"
                value={props.values.role}
                name="role"
                onChange={handleChange}
               />  
             </label>&nbsp;
             <input type="submit" value="Submit!" />
            
             </form>
    );
}