import { FETCH_CONTACT } from "../actions/actions";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_CONTACT:
            return action.payload;
        default:
            return state;
    }
}