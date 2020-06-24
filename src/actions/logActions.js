import {
  ADD_LOG,
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from './types'

// Add logs to server
export const addLog = (log) => async (dispatch) => {
  try {
    const res = await fetch('/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log),
    })
    const data = await res.json()

    console.log('Success:', data)

    dispatch({
      type: ADD_LOG,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    })
  }
}

// Get logs from server..
export const getLogs = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('/logs')
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    })
  }
}

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading()
    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE',
    })

    // const data = res.json()
    // console.log(data)

    dispatch({
      type: DELETE_LOG,
      payload: id,
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    })
  }
}

export const setCurrent = (currentlog) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: currentlog,
  })
}

export const clearCurrent = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  })
}

export const updateLog = (updatedLog) => async (dispatch) => {
  try {
    setLoading()
    const res = fetch(`/logs/${updatedLog.id}`, {
      method: 'PUT', // Method itself
      headers: {
        'Content-Type': 'application/json', // Indicates the content
      },
      body: JSON.stringify(updatedLog), // We send data in JSON format}
    })
    // const data = res.json()
    dispatch({
      type: UPDATE_LOG,
      payload: updatedLog,
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    })
  }
}

export const searchLog = (searchLog) => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch(`/logs?q=${searchLog}`)
    const data = await res.json()

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
