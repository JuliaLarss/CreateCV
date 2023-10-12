import PropTypes from 'prop-types';
import { useState } from 'react';
import PersonalForm from './personal/PersonalForm';
import EducationForm from './education/EducationForm';

function Form({personal, updatePersonal, education, updateEducation, updateStatus}) {

    const [personalInfo, setPersonalInfo] = useState(personal);
    const [educationInfo, setEducationInfo] = useState(education);

    const updatePersonalInfo = (newValue) => {
        setPersonalInfo(newValue);
    }

    const updateEducationInfo = (newValue) => {
        setEducationInfo(newValue);
    }

    const SubmitForm=(e)=> {
        e.preventDefault;
        updatePersonal(personalInfo);
        updateEducation(educationInfo);
        updateStatus();
    }

    const cancelForm = () => {
        updateStatus();
    }

  return (
    <div>
        <form onSubmit={SubmitForm}>
            <h2>Personal information:</h2>
            <PersonalForm  
                personalInput={personalInfo}
                updateInput={updatePersonalInfo}/>
            <h2>Education information:</h2>
            <EducationForm 
                educationInput={educationInfo}
                updateInput={updateEducationInfo}/>
            <input type="submit" />
            <button type="button" onClick={cancelForm}>Cancel</button>
        </form>
    </div>
  )
}

Form.propTypes={
    personal:PropTypes.object,
    updatePersonal:PropTypes.func,
    education:PropTypes.object,
    updateEducation:PropTypes.func,
    updateStatus:PropTypes.func
}
export default Form