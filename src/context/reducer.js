import {COVID_DATA, ALL_DATA} from './types'


export default (state, action) => {
  switch (action.type) {
     case COVID_DATA:
      return {...state,
        country: action.payload.country_name,
        total_cases: action.payload.total_cases,
        new_cases: action.payload.new_cases,
        total_deaths: action.payload.total_deaths,
        new_deaths: action.payload.new_deaths}
      case ALL_DATA:
        return {
          ...state, all_cases: action.payload
        }

    default: return state
  }
}
