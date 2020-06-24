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
} from '../actions/types'

const initialState = {
  logs: null,
  current: null,
  loading: false,
  errors: null,
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
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      }
    case LOGS_ERROR:
      return {
        ...state,
        errors: action.payload,
      }
    case ADD_LOG:
      return {
        ...state,
        // ... respresents the rest of the objects which were already in the state before ////adding new log
        logs: [...state.logs, action.payload],
      }
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      }
    case SEARCH_LOGS:
      return {
        logs: action.payload,
      }
  }
}
