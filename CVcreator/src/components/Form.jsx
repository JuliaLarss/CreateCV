import PropTypes from 'prop-types';
import { useState } from 'react';
import PersonalForm from './personal/PersonalForm';

function Form({personal, updatePersonal, updateStatus}) {

    const [personalInfo, setPersonalInfo] = useState(personal);

    const updatePersonalInfo = (newValue) => {
        setPersonalInfo(newValue);
    }

    const SubmitForm=(e)=> {
        e.preventDefault;
        updatePersonal(personalInfo);
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
            <input type="submit" />
            <button type="button" onClick={cancelForm}>Cancel</button>
        </form>
    </div>
  )
}

Form.propTypes={
    personal:PropTypes.object,
    updatePersonal:PropTypes.func,
    updateStatus:PropTypes.func
}
export default Form