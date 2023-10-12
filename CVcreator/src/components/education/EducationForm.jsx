import PropTypes from 'prop-types';

function EducationForm({educationInput, updateInput}) {

    const updateEducationData = (event) => {
        let data={...educationInput};
        data[event.target.name]=event.target.value;
        updateInput(data);
    }

  return (
    <div>
        <div>
            <label htmlFor="school">School:</label>
            <input 
                type="text"
                name='school'
                value={educationInput.school}
                onChange={(e) => {updateEducationData(e)}} />
        </div>
        <div>
            <label htmlFor="degree">Degree:</label>
            <input 
                type="text"
                name='degree'
                value={educationInput.degree}
                onChange={(e) => {updateEducationData(e)}} />
        </div>
        <div className="dateContainer">
            <div>
                <label htmlFor="start">Start:</label>
                <input 
                    type="date"
                    name='start'
                    value={educationInput.start}
                    onChange={(e) => {updateEducationData(e)}} />
            </div>
            <div>
                <label htmlFor="end">End:</label>
                <input 
                    type="date"
                    name='end'
                    value={educationInput.end}
                    onChange={(e) => {updateEducationData(e)}} />
            </div>
        </div>
        
    </div>
  )
}

EducationForm.propTypes ={
    educationInput:PropTypes.object,
    updateInput:PropTypes.func
}
export default EducationForm