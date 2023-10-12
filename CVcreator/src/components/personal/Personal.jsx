import PropTypes from 'prop-types'

function Personal({personalData}) {
  return (
    <div>
        <h3>Name: {personalData.name}</h3>
        <p>Email: {personalData.email}</p>
        <p>Phone: {personalData.phone}</p>
    </div>
  )
}
Personal.propTypes = {
    personalData:PropTypes.object
}
export default Personal