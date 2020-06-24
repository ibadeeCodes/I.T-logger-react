import React, { useEffect, Fragment } from 'react'
import LogItem from './LogItem'
import PreLoader from '../../components/layouts/PreLoader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'
import { getTechs } from '../../actions/techActions'

const Logs = ({ log: { loading, logs }, getLogs, getTechs }) => {
  useEffect(() => {
    getLogs()
    getTechs()
    //eslint-disable-next-line
  }, [])

  if (loading || logs === null) {
    return <PreLoader />
  }

  return (
    <Fragment>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <h1>No logs found!</h1>
        ) : (
          logs.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </Fragment>
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  log: state.log,
})

export default connect(mapStateToProps, { getLogs, getTechs })(Logs)
