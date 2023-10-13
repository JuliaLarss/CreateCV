import PropTypes from 'prop-types'

function Experience({experienceData}) {
  return (
    <div>
      {experienceData.map((elem, id) => {
        return (
          <div key={id}>
            <h3><b>Company:</b> {elem.company}</h3>
            <p><b>Position:</b> {elem.position}</p>
            <p><b>Position:</b> {elem.responsB}</p>
            <p><b>Start/finish:</b> {elem.start} - {elem.end === "" ? "present" : elem.end}</p>
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