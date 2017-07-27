import { FETCH_WORK } from "../actions/actions";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WORK:
            return action.payload;
        default:
            return state;
    }
}