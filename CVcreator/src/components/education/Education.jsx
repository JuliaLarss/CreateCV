import PropTypes from 'prop-types';

function Education({educationData}) {
  return (
    <div>
        <h3>School: {educationData.school}</h3>
        <p>Degree: {educationData.degree}</p>
        <div className="dateContainer">
            <p>Start: {educationData.start}</p>
            <p>End: {educationData.end}</p>
        </div>
    </div>
  )
}

Education.propTypes={
    educationData:PropTypes.object
}
export default Education