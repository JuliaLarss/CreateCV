import PropTypes from 'prop-types'
import Personal from './personal/Personal'
import Education from './education/Education';
import Experience from './experience/Experience';

function Container({personal, education, experience}) {
  return (
    <div>
      <h2>Personal:</h2>
        <Personal personalData={personal}/>
      <h2>Education:</h2>
        <Education educationData={education}/>
      <h2>Experience:</h2>
        <Experience experienceData={experience}/>
    </div>
  )
}

Container.propTypes = {
    personal:PropTypes.object,
    education:PropTypes.object,
    experience:PropTypes.array
}

export default Container;