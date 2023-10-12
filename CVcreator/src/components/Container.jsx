import PropTypes from 'prop-types'
import Personal from './personal/Personal'

function Container({personal}) {
  return (
    <div>
      <h2>Personal:</h2>
        <Personal personalData={personal}/>
    </div>
  )
}

Container.propTypes = {
    personal:PropTypes.object
}

export default Container