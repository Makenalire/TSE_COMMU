import { SET_JOB, SET_ROOM, SET_ROOM_TIME, SET_ROOM_DATE, SET_UID } from "./action";

const initialState = {
    job: '',
    room: '',
    roomTime: '',
    roomDate: '',
    uid: ''
}

function userReducer(state=initialState, action){
    switch (action.type) {
        case SET_JOB:
            return {...state, job: action.payload};
        case SET_ROOM:
            return {...state, room: action.payload};
        case SET_ROOM_TIME:
            return {...state, roomTime: action.payload};
        case SET_ROOM_DATE:
            return {...state, roomDate: action.payload};
        case SET_UID:
            return {...state, uid: action.payload};
        default:
            return state;
    }
}

export default userReducer;