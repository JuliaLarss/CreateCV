import PropTypes from 'prop-types'

function Experience({experienceData}) {

  // Display the input values
  return (
    <div className='containerSection'>
      {experienceData.map((elem, id) => {
        return (
          <div key={id} className='expContainer'>
            <h3><b>Company:</b> {elem.company}</h3>
            <p><b>Position:</b> {elem.position}</p>
            <p><b>Position:</b> {elem.responsB}</p>
            <p><b>Start:</b> {elem.start}</p>
            <p><b>End:</b> {elem.end}</p>
          </div>
        )
      })}
    </div>
  )
}


Experience.propTypes = {
  experienceData:PropTypes.array
}
export default Experience