import PropTypes from 'prop-types'
import Personal from './personal/Personal'
import Education from './education/Education';

function Container({personal, education}) {
  return (
    <div>
      <h2>Personal:</h2>
        <Personal personalData={personal}/>
      <h2>Education:</h2>
      <Education educationData={education}/>
    </div>
  )
}

Container.propTypes = {
    personal:PropTypes.object,
    education:PropTypes.object
}

export default Container;