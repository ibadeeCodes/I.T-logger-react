import {
  ADD_TECH,
  SET_LOADING,
  TECHS_ERROR,
  GET_TECHS,
  DELETE_TECH,
} from './types'

// Add logs to server
export const addTech = (tech) => async (dispatch) => {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tech),
    })
    const data = await res.json()

    console.log('Success:', data)

    dispatch({
      type: ADD_TECH,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err,
    })
  }
}

// Get logs from server..
export const getTechs = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('/techs')
    const data = await res.json()

    dispatch({
      type: GET_TECHS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    })
  }
}

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading()
    const res = await fetch(`/techs/${id}`, {
      method: 'DELETE',
    })

    // const data = res.json()
    // console.log(data)

    dispatch({
      type: DELETE_TECH,
      payload: id,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
