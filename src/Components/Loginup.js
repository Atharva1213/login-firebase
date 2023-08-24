import React from 'react'
import "./Login.css";   
import Styled from "styled-components";
export default function Loginup(props) {
  
    const StyledParagraph=Styled.p`
     color:red;
     padding:0px; 
     margin:0px;
     margin-bottom:4px;
   `;
   const StyledStable=Styled.p`
   color:green;
   padding:0px; 
   margin:0px;
   margin-bottom:4px;
 `;
  return ( 
    <div className="login-up" id="s1"> 
    <h2 className="text header">Login</h2> 
    <button type="button" className="button blue">Login via Twiiter</button> 
    <button type="button" className="button deepblue">Login via facebook</button> 
    {props.first===1 ? <StyledParagraph>{props.message}</StyledParagraph> : 
    <StyledStable>{props.message}</StyledStable>} 
    <hr className="hr" /> 
    <form onSubmit={props.submit}> 

         <input className="get" type="email" name="email" placeholder="Email Address" /><br/>  
         <input className="get" type="password" name="password" placeholder="Create Password" /><br />
         <input type="submit" className="button blue"  value="Login" />
    </form>
    <span> 
            <span className="last-term"> 
            <button type="button" onClick={props.prev}>Create</button> an Account  
         </span>
    </span>
    </div>
  )
}
