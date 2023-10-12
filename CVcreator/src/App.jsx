import { useState } from 'react';
import './App.css'
import Form from './components/Form';
import Container from './components/Container';

function App() {

  const[personalInfo, setPersoalInfo] = useState({name:"",email:"",phone:""});
  const[educationInfo, setEducationInfo] = useState({school:'', degree:'',start:'',end:''});
  const[viewForm, setViewForm] = useState(true)

  const updatePersonalInfo = (newValue) => {
    setPersoalInfo(newValue);
  }
const updateEducationInfo = (newValue) => {
  setEducationInfo(newValue);
}
  
  if(viewForm){
    return(
      <>
      <Form 
        personal={personalInfo}
        updatePersonal={updatePersonalInfo}

        education={educationInfo}
        updateEducation={updateEducationInfo}

        updateStatus={() => {setViewForm(!viewForm)}}/>
      </>
    )
  }
  return (
    <>
    <Container personal={personalInfo} education={educationInfo}/>
    <button type='button' onClick={() => {setViewForm(!viewForm)}}>Edit</button>
    </>
  )
}

export default App
