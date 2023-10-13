import { useState } from 'react';
import './App.css'
import Form from './components/Form';
import Container from './components/Container';

function App() {

  const[personalInfo, setPersoalInfo] = useState({name:"",email:"",phone:""});

  const[educationInfo, setEducationInfo] = useState({school:'', degree:'',start:'',end:''});

  const[experienceInfo, setExperienceInfo] = useState([]);

  const[viewForm, setViewForm] = useState(true)

  const updatePersonalInfo = (newValue) => {
    setPersoalInfo(newValue);
  }
const updateEducationInfo = (newValue) => {
  setEducationInfo(newValue);
}

const updateExperienceInfo = (newValue) => {
  setExperienceInfo(newValue);
}
  
  if(viewForm){
    return(
      <>
      <Form 
        personal={personalInfo}
        updatePersonal={updatePersonalInfo}

        education={educationInfo}
        updateEducation={updateEducationInfo}

        experience={experienceInfo}
        updateExperience={updateExperienceInfo}

        updateStatus={() => {setViewForm(!viewForm)}}/>
      </>
    )
  }
  return (
    <>
    <Container 
    personal={personalInfo} 
    education={educationInfo}
    experience={experienceInfo}/>
    <button type='button' onClick={() => {setViewForm(!viewForm)}}>Edit</button>
    </>
  )
}

export default App
