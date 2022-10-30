export const SET_JOB = 'SET_JOB';

export const setJob = job => dispatch => {
    dispatch({
        type: SET_JOB,
        payload: job,
    });
};