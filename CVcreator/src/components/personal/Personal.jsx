import PropTypes from 'prop-types'

function Personal({personalData}) {
  return (
    <div>
        <h3>{personalData.name}</h3>
        <p>{personalData.email}</p>
        <p>{personalData.phone}</p>
    </div>
  )
}
Personal.propTypes = {
    personalData:PropTypes.object
}
export default Personal