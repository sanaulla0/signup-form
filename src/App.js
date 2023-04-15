import React,{useState} from 'react';
import './App.css';

function App() {
  const [password,setPassword] = useState('');
// const [validpassword , setValidpassword] = useState(false);
const[confirmpass , setConfirmpass] = useState('');
const[checkpass , setCheckpass] = useState(false);
const[errorMessage,setErrorMessage] = useState('');
   const[name , setName] = useState('');
   const[email , setEmail] = useState('');
   const[sucessmsg , setSucessmsg] = useState('');

  const handlechange = (e)=>{
             setPassword(e.target.value);
             console.log(password); 
             
  }
  const handleconfirm = (e)=>{
             setConfirmpass(e.target.value);
  }
  const fname = (e)=>{
          setName(e.target.value);
  }
  const handleEmail = (e)=>{
       setEmail(e.target.value);
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    if (!name || !email || !password || !confirmpass) {
      setCheckpass(false);
      setErrorMessage('Error: All fields are mandatory');
      setSucessmsg('');
      return;
    }
    if(!email.includes('@') && !email.includes('.')){
             setCheckpass(false);
             setErrorMessage('Error:email is not valid');
             setSucessmsg('');
             return;
    }
       if(password===confirmpass){
                 setCheckpass(true);
                 setErrorMessage('');
                 setSucessmsg('Successfully Signed Up!');
       }
       else{
         setCheckpass(false); 
         setErrorMessage('Error:Password is not Matched');
         setSucessmsg('');
       }
  }
  return (
    <div>
      
      <div className="App">
      <h1>Signup</h1>
       <form>
           <input type='text' placeholder='Full Name' onChange={fname} className='name' value={name} /> <br/>
           <input type='Email' placeholder='Email' onChange={handleEmail} className='name' value={email} />   <br/>
           <input type='Password' onChange={handlechange} placeholder='Password' className='name' value={password} /> <br/>
           <input type='Password' placeholder='Confirm Password' onChange={handleconfirm} className='name' value={confirmpass} /> <br/>
           <button type='Submit' onClick={onSubmit}>Signup</button> <br/>
          <div className='error'>{errorMessage}</div>
           <div className='sucess'>{sucessmsg}</div>
       </form> 
       
    </div>
    </div>
  );
}

export default App;
