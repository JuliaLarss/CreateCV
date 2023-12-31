import PropTypes from 'prop-types'

function Personal({personalData}) {

  // Display the input values
  return (
    <div className='containerSection'>
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