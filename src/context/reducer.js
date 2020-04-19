import {COVID_DATA, ALL_DATA, GRAPHDATA ,REMOVE_GRAPH_DATA} from './types'


export default (state, action) => {
  switch (action.type) {
     case COVID_DATA:
     console.log(action.payload)
      return {...state,
        country: action.payload.country,
        total_cases: action.payload.data.total_cases,
        new_cases: action.payload.data.new_cases,
        total_deaths: action.payload.data.total_deaths,
        new_deaths: action.payload.data.new_deaths}
      case ALL_DATA:
        return {
          ...state, all_cases: action.payload
        }
      case GRAPHDATA:
      console.log(action.payload)
        return {
          ...state, graphing_arr:[...state.graphing_arr, action.payload]
        }
      case REMOVE_GRAPH_DATA:
        return {...state, graphing_arr: state.graphing_arr.filter(data => data.name != action.payload)}

    default: return state
  }
}
