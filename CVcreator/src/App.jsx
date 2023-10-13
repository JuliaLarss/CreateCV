import { useState } from 'react';
import './App.css'
import Form from './components/Form';
import Container from './components/Container';
import Title from './components/Title';

function App() {

  // Personal
  const[personalInfo, setPersoalInfo] = useState({name:"",email:"",phone:""});
  const updatePersonalInfo = (newValue) => {
      setPersoalInfo(newValue);
    }

  // Education
  const[educationInfo, setEducationInfo] = useState({school:'', degree:'',start:'',end:''});
  const updateEducationInfo = (newValue) => {
    setEducationInfo(newValue);
  }

  // Experience
  const[experienceInfo, setExperienceInfo] = useState([]);
  const updateExperienceInfo = (newValue) => {
    setExperienceInfo(newValue);
  }

  // Form states
  const[viewForm, setViewForm] = useState(true)

  // == Form ==
  if(viewForm){
    return(
      <div className='formContainer'>
        <Title />
        <Form 
          personal={personalInfo}
          updatePersonal={updatePersonalInfo}

          education={educationInfo}
          updateEducation={updateEducationInfo}

          experience={experienceInfo}
          updateExperience={updateExperienceInfo}

          updateStatus={() => {setViewForm(!viewForm)}}/>
      </div>
    )
  }
  // == CV ==
  return (
    <div className='formContainer'>
      <Title />
      <Container 
      personal={personalInfo} 
      education={educationInfo}
      experience={experienceInfo}/>
      <button id='edit' type='button' onClick={() => {setViewForm(!viewForm)}}>Edit</button>
    </div>
  )
}

export default App
