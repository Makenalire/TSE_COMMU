export const SET_JOB = 'SET_JOB';

export const setJob = job => dispatch => {
    dispatch({
        type: SET_JOB,
        payload: job,
    });
};

export const SET_ROOM = "SET_ROOM";

export const setRoom = room => dispatch => {
    dispatch({
        type: SET_ROOM,
        payload: room,
    });
};

export const SET_ROOM_TIME = "SET_ROOM_TIME";

export const setRoomTime = roomTime => dispatch => {
    dispatch({
        type: SET_ROOM_TIME,
        payload: roomTime,
    });
};

export const SET_ROOM_DATE = "SET_ROOM_DATE";

export const setRoomDate = roomDate => dispatch => {
    dispatch({
        type: SET_ROOM_DATE,
        payload: roomDate,
    });
};