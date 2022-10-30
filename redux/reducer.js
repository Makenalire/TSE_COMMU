import { SET_JOB } from "./action";

const initialState = {
    job: '',
}

function userReducer(state=initialState, action){
    switch (action.type) {
        case SET_JOB:
            return {...state, job: action.payload};
        default:
            return state;
    }
}

export default userReducer;