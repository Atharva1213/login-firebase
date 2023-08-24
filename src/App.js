import React,{Component}  from "react"; 
import Loginup  from "./Components/Loginup.js";
import Signup  from "./Components/Signup.js"; 
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,sendSignInLinkToEmail,signInWithPopup} from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyAW5YQm6_FaujeiDrQFsN4pC5zhxHflYmA",
  authDomain: "atharva-82d66.firebaseapp.com",
  databaseURL: "https://atharva-82d66-default-rtdb.firebaseio.com",
  projectId: "atharva-82d66",
  storageBucket: "atharva-82d66.appspot.com",
  messagingSenderId: "282754722207",
  appId: "1:282754722207:web:d0315b026034c37fc9f5aa"
};
const app = initializeApp(firebaseConfig);

class App extends Component 
{  
    constructor(props)
    {
       super(props); 
       this.state={  
          ischange:false,
          message:null,
          first:1,
          iscomplete:false
       }
    } 
    changehandler=()=> 
    {
            const name=!this.state.ischange; 
            this.setState({ischange:name});         
    } 
    loginhandler=(event)=> 
    { 
      event.preventDefault();
      const email=event.target.email.value; 
      const password=event.target.password.value; 
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
         console.log(data); 
        this.setState({message:"Login Successfully",first:0},()=>
             {
              event.target.email.value=""; 
              event.target.password.value="";
              setTimeout(() => {
                this.setState({message:null,first:1}); 
              },2000);
             });
          })
  .catch((error) => {
    this.setState({message:error.message,first:1});  
    event.target.email.value=""; 
    event.target.password.value="";
    setTimeout(() => {
      this.setState({message:null,first:1}); 
    },2000);}); 
    }
    registerhandler=(event)=> 
    {
          event.preventDefault(); 
          const email=event.target.email.value; 
          const  password=event.target.password.value;  
          const  Confirmpassword=event.target.Confirmpassword.value;  
          if(password !==Confirmpassword)
          {
            this.setState({message:"Password not Match ",first:1}); 
            event.target.email.value=""; 
            event.target.password.value="";
            event.target.Confirmpassword.value="";  
            setTimeout(() => {
              this.setState({message:null,first:1}); 
            },2000);
            return;
          } 
          const auth = getAuth(app); 
          sendSignInLinkToEmail(auth, email,firebaseConfig)
          createUserWithEmailAndPassword(auth, email, password)
         .then(() =>{ 
             this.setState({message:"Successfully Register",first:0},()=>
             {
              event.target.email.value=""; 
              event.target.password.value="";
              event.target.Confirmpassword.value="";  
              setTimeout(() => {
                this.setState({message:null,first:1}); 
              },2000); 
             });
         })
         .catch((error) => {
            this.setState({message:error.message,first:1}); 
            setTimeout(() => {
              this.setState({message:null,first:1});  
              event.target.email.value=""; 
              event.target.password.value="";
              event.target.Confirmpassword.value="";  
            },2000);
          });
    }
    googlesignup=()=> 
    {
      const auth = getAuth();  
      var provider=new GoogleAuthProvider();      
      signInWithPopup(auth,provider)
        .then(() => {
          alert("Login successfully"); 
        }).catch((error) => { 
          alert(error.message); 
        });
    }
    render()
     {
          return( 
              <div> 
                {this.state.ischange===false ? 
                 <Signup  next={this.changehandler} message={this.state.message} first={this.state.first} signup={this.googlesignup} submit={this.registerhandler}/>:  
                 <Loginup prev={this.changehandler} submit={this.loginhandler}  message={this.state.message} first={this.state.first}   />} 
              </div>
          );
     }
}
 
export default App;