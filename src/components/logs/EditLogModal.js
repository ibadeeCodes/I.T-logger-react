import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { clearCurrent, updateLog } from '../../actions/logActions'

const EditLogModal = ({ current, clearCurrent, updateLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  useEffect(() => {
    if (current) {
      setMessage(current.message)
      setAttention(current.attention)
      setTech(current.tech)
    }
  }, [current])

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and technician.' })
    } else {
      // console.log(message, attention, tech)
      const updLog = {
        id: current.id,
        message: message,
        attention: attention,
        tech: tech,
        date: new Date(),
      }
      // Update log!
      updateLog(updLog)

      // Clear current karo!
      clearCurrent()
    }
  }

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit System Log</h4>
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
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Williamson'>Williamson</option>
              <option value='Peter'>Peter</option>
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
  current: state.log.current,
})

const modalStyle = {
  width: '75%',
  height: '75%',
}

export default connect(mapStateToProps, { clearCurrent, updateLog })(
  EditLogModal
)
