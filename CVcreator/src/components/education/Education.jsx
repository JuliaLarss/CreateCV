import PropTypes from 'prop-types';

function Education({educationData}) {
  return (
    <div className='containerSection'>
        <h3><b>School:</b> {educationData.school}</h3>
        <p><b>Degree:</b> {educationData.degree}</p>
        <p><b>Start:</b> {educationData.start}</p>
        <p><b>End:</b> {educationData.end}</p>
    </div>
  )
}

Education.propTypes={
    educationData:PropTypes.object
}
export default Education