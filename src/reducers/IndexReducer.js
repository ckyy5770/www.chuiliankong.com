import { FETCH_INDEX } from "../actions/actions";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_INDEX:
            return action.payload;
        default:
            return state;
    }
}