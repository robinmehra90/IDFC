/**
 * Created by TTND on 5/5/2018.
 */
import { SET_MESSAGE } from "../constants/message";
export const setMessage = (message) => {
    return dispatch => {
        dispatch({
            type: SET_MESSAGE,
            payload: {
                message
            }
        })
    }
}