import PropTypes from 'prop-types'

function Personal({personalData}) {
  return (
    <div>
        <h3><b>Name:</b> {personalData.name}</h3>
        <p><b>Email:</b> {personalData.email}</p>
        <p><b>Phone:</b> {personalData.phone}</p>
    </div>
  )
}
Personal.propTypes = {
    personalData:PropTypes.object
}
export default Personal