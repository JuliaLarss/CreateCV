import PropTypes from 'prop-types';


function ExperienceForm({experienceInput, updateInput}) {

    const handleFormChange = (index,event) => {
        let data = [...experienceInput];
        data[index][event.target.name]  = event.target.value;
        updateInput(data);
    }

    const addInput = () => {
        let newFiels = {
            company:'', position:'', responsB:'', start:'',end:'',
        };
        updateInput([...experienceInput, newFiels]);
    }

    const removeInput = (index) => {
        let data = [...experienceInput];
        data.slice(index,1);
        updateInput(data);
    }
  return (
    <div>
        {experienceInput.map((elem, index) => {
            return (
                <div key={index}>
                    <div>
                        <label htmlFor="company">Company:</label>
                        <input 
                        type="text"
                        name='company'
                        value={elem.company}
                        onChange={(e) => handleFormChange(index,e)} />
                    </div>
                    <div>
                        <label htmlFor="position">Position:</label>
                        <input 
                        type="text"
                        name='position'
                        value={elem.position}
                        onChange={(e) => handleFormChange(index,e)} />
                    </div>
                    <div>
                        <label htmlFor="responsB">Responsabilities:</label>
                        <input 
                        type="text"
                        name='responsB'
                        value={elem.responsB}
                        onChange={(e) => handleFormChange(index,e)} />
                    </div>
                    <div className="dateContainer">
                        <div>
                            <label htmlFor="start">Start:</label>
                            <input 
                            type="date"
                            name='start'
                            value={elem.start}
                            onChange={(e) => handleFormChange(index,e)} />
                        </div>
                        <div>
                            <label htmlFor="end">End:</label>
                            <input 
                            type="date"
                            name='end'
                            value={elem.end}
                            onChange={(e) => handleFormChange(index,e)} />
                        </div>
                    </div>
                    <button type="button" onClick={() => removeInput(index)}>Remove</button>
                </div>
            )
        })}
        <button type="button" onClick={addInput}>+ Add Experience</button>
    </div>
  )
}

ExperienceForm.propTypes={
    experienceInput:PropTypes.array,
    updateInput:PropTypes.func
}
export default ExperienceForm