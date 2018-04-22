import {SET_MESSAGE} from '../types/message';

export const setMessage = (message) => {
    return dispatch => {
        dispatch({
            type: SET_MESSAGE,
            payload: {
                message
            }
        })
    }
};
// 1 function (voi args = message) return 1 function (voi args = dispatch)
// => ta can truyen 2 tham so: ex: func1(arg1)(arg2)
// arg2 = function(object) => execute function 2 voi args = arg1
// Kho hieu vcc
