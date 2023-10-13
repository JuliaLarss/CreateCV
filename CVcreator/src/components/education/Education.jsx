import PropTypes from 'prop-types';

function Education({educationData}) {
  return (
    <div>
        <h3><b>School:</b> {educationData.school}</h3>
        <p><b>Degree:</b> {educationData.degree}</p>
        <div className="dateContainer">
            <p><b>Start:</b> {educationData.start}</p>
            <p><b>End:</b> {educationData.end}</p>
        </div>
    </div>
  )
}

Education.propTypes={
    educationData:PropTypes.object
}
export default Education