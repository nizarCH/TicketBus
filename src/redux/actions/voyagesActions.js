import {ActionTypes} from "../constants/action-types";

export const setVoyages=(voyages)=>{
    return {
        type: ActionTypes.SET_VOYAGES,
        payload: voyages,
    }   ;
};


export const selectedVoyage=(voyage)=>{
    return {
        type: ActionTypes.SELECTED_VOYAGE,
        payload: voyage,
    };
};


export const removeselectedVoyage=(voyage)=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_VOYAGE,
        payload: voyage,
    };
};