import React from 'react'
import "./Login.css";  
import  Styled from 'styled-components';


export default function Signup(props) { 
    
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
    <div className="login-up" id="s2"> 
    <h2 className="text header">Create Account</h2> 
    <p className="text">Get Started With your free account</p>  
    <button type="button" className="button blue" onClick={props.signup}>Signup via Google</button> 
    <button type="button" className="button deepblue">Signup via facebook</button>
    {props.first===1 ? <StyledParagraph>{props.message}</StyledParagraph> : 
    <StyledStable>{props.message}</StyledStable>}
    <hr class="hr" />
    <form onSubmit={props.submit}> 

         <input className="get" type="email" name="email" placeholder="Email Address" /><br/>  
         <input className="get" type="password" name="password" placeholder="Create Password " /><br />
         <input  className="get" type="password"  name="Confirmpassword" placeholder="Repeat Password"  /> <br /> 
         <input type="submit" className="button blue" value="Create Account" />
    </form>
    <span> 
         <span className="last-term"> 
             Have an account ? <button type="button" onClick={props.next}>log In</button>
         </span>
    </span>
</div> 
  )
}
