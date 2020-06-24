import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { addTech } from '../../actions/techActions'
import { connect } from 'react-redux'

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a message and technician.' })
    } else {
      console.log(firstName, lastName)

      const newTech = {
        firstName,
        lastName,
        date: new Date(),
      }

      addTech(newTech)

      setFirstName('')
      setLastName('')
    }
  }

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Add
        </a>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   tech: state.tech,
// })

export default connect(null, { addTech })(AddTechModal)
