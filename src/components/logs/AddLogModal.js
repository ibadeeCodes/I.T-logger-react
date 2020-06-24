import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import PreLoader from '../../components/layouts/PreLoader'
import { addLog } from '../../actions/logActions'
import { getTechs } from '../../actions/techActions'
import { connect } from 'react-redux'
import TechSelectOptions from '../techs/TechSelectOptions'

const AddLogModal = ({ tech: { techs, loading }, addLog, getTechs }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  // useEffect(() => {
  //   getTechs()
  //   console.log(techs)
  // }, [])

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and technician.' })
    } else {
      console.log(message, attention, tech)
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      }

      addLog(newLog)
      setMessage('')
      setAttention(false)
      setTech('')
    }
  }

  // if (techs === null) {
  //   return <PreLoader />
  // }

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              {!loading && techs !== null && techs.length > 0 ? (
                <TechSelectOptions />
              ) : (
                <option value='no technicians'>No technicians</option>
              )}
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tech: state.tech,
})

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}

const modalStyle = {
  width: '75%',
  height: '75%',
}

export default connect(mapStateToProps, { addLog, getTechs })(AddLogModal)
