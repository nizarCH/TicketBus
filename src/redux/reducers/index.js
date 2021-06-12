import {combineReducers} from 'redux'
import {voyageReducer, selectedVoyageReducer} from './voyageReducer'

const reducers = combineReducers({
    allVoyages: voyageReducer,
    voyage: selectedVoyageReducer,
})

export default reducers