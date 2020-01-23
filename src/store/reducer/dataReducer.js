
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../action-types'
import _ from 'lodash';

const initialState = {
  data: [],
  selectedData: {},
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true,
        selectedData: {}
      }
    case FETCHING_DATA_SUCCESS:
      if (!_.isArray(action.data)) {
        return {
          ...state,
          isFetching: false,
          selectedData: action.data
        }
      } else {
        return {
          ...state,
          isFetching: false,
          data: action.data
        }
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
