import {UPDATE,DELETE} from "./Action";

export const Appstate=(state={value:''},action)=>{
switch(action.type){
    case UPDATE:
    return {
        ...state,
        value: action.text   
    }
    break;
    case DELETE:
    break;
    default:
    return state
}
}