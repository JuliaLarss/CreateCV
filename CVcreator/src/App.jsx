import { useState } from 'react';
import './App.css'
import Form from './components/Form';
import Container from './components/Container';

function App() {

  const[personalInfo, setPersoalInfo] = useState({name:"",email:"",phone:""});
  const[viewForm, setViewForm] = useState(true)

  const updatePersonalInfo = (newValue) => {
    setPersoalInfo(newValue);
  }

  
  
  if(viewForm){
    return(
      <>
      <Form 
        personal={personalInfo}
        updatePersonal={updatePersonalInfo}
        updateStatus={() => {setViewForm(!viewForm)}}/>
      </>
    )
  }
  return (
    <>
    <Container personal={personalInfo}/>
    <button type='button' onClick={() => {setViewForm(!viewForm)}}>Edit</button>
    </>
  )
}

export default App
