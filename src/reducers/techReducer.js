import {
  ADD_TECH,
  SET_LOADING,
  TECHS_ERROR,
  GET_TECHS,
  DELETE_TECH,
} from '../actions/types'

const initialState = {
  techs: null,
  errors: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      }
    case TECHS_ERROR:
      return {
        ...state,
        errors: action.payload,
      }
    case ADD_TECH:
      return {
        ...state,
        // ... respresents the rest of the objects which were already in the state before ////adding new log
        techs: [...state.techs, action.payload],
      }
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      }
  }
}
