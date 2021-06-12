import { ActionTypes } from "../constants/action-types"


const initialState ={
    voyages: [],
}
export const voyageReducer =(state=initialState,{type,payload}) =>{
switch(type){
    case ActionTypes.SET_VOYAGES:
        return {...state, voyages : payload};
        default:
            return state;
}
}
const initial ={
    destination: [],
}

export const selectedVoyageReducer=(state=initial,{type, payload})=>{
    switch(type){
        case ActionTypes.SELECTED_VOYAGE:
            return {...state, destination: payload};
            case ActionTypes.REMOVE_SELECTED_VOYAGE:
                return {};
            default:
                return state;
    }
}