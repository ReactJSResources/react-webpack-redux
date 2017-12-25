import { combineReducers } from 'redux'
import {
  SET_USER,
  SET_ERROR,
} from '../actions/index'


function user(state = [], action) {
  switch (action.type) {
    case SET_USER:
    return Object.assign({}, state, {
      data: action.data
  });
    case SET_ERROR:
      return [
        ...state,
        {
          data: action.data
        }
      ]
    default:
      return state
  }
}

const userApp = combineReducers({
  user
})

export default userApp
