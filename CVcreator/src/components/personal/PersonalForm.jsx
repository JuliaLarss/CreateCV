import PropTypes from 'prop-types';

function PersonalForm({personalInput, updateInput}) {

    // Take the input values
    const updatePersonalData = (event) => {
        let data = {...personalInput};
        data[event.target.name] = event.target.value;
        updateInput(data);
    }
  return (
    <div className='personalContainer'>
        <div>
            <label htmlFor="name">Name:</label>
            <input 
            type="text"
            name='name'
            value={personalInput.name} 
            onChange={(e) => updatePersonalData(e)}/>
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input 
            type="email"
            name='email'
            value={personalInput.email} 
            onChange={(e) => updatePersonalData(e)}/>
        </div>
        <div>
            <label htmlFor="phone">Phone:</label>
            <input 
            type="tel"
            name='phone'
            value={personalInput.phone} 
            onChange={(e) => updatePersonalData(e)}/>
        </div>
    </div>
  )
}

PersonalForm.propTypes={
    personalInput:PropTypes.object,
    updateInput:PropTypes.func
}
export default PersonalForm