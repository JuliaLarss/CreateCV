import PropTypes from 'prop-types';
import { useState } from 'react';
import PersonalForm from './personal/PersonalForm';
import EducationForm from './education/EducationForm';
import ExperienceForm from './experience/ExperienceForm';

function Form({
    personal, updatePersonal, 
    education, updateEducation,
    experience, updateExperience, 
    updateStatus}) {

    // States
    const [personalInfo, setPersonalInfo] = useState(personal);
    const [educationInfo, setEducationInfo] = useState(education);
    const [experienceInfo, setExperienceInfo] = useState(
        experience.length > 0 ? experience:
        [{ company:"", position:"", responsB:"",start:"",end:""}]
    );

    const isEmpty = (object) => {
        for(const [ ,value] of Object.entries(object)){
            if(value!==""){
                return false;
            }
            return true;
        }
    }

    // updateState
    const updatePersonalInfo = (newValue) => {
        setPersonalInfo(newValue);
    }
    const updateEducationInfo = (newValue) => {
        setEducationInfo(newValue);
    }
    const updateExperienceInfo = (newValue) => {
        setExperienceInfo(newValue);
    }

    // Submit forms
    const SubmitForm=(e)=> {
        e.preventDefault;
        updatePersonal(personalInfo);
        updateEducation(educationInfo);
        updateExperience(experienceInfo.filter((elem) => !isEmpty(elem)));
        updateStatus();
    }

    // Cancel form
    const cancelForm = () => {
        updateStatus();
    }

  return (
        <form onSubmit={SubmitForm}>
            <h2>Personal information:</h2>
            <PersonalForm  
                personalInput={personalInfo}
                updateInput={updatePersonalInfo}/>
            <h2>Education information:</h2>
            <EducationForm 
                educationInput={educationInfo}
                updateInput={updateEducationInfo}/>
            <h2>Experience information:</h2>
            <ExperienceForm
                experienceInput={experienceInfo}
                updateInput={updateExperienceInfo} />
            <div className="buttons">
                <input type="submit" />
                <button type="button" onClick={cancelForm}>Cancel</button>
            </div>
        </form>

  )
}

Form.propTypes={
    personal:PropTypes.object,
    updatePersonal:PropTypes.func,
    education:PropTypes.object,
    updateEducation:PropTypes.func,
    experience:PropTypes.array,
    updateExperience:PropTypes.func,
    updateStatus:PropTypes.func
}
export default Form