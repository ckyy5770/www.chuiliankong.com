import { FETCH_EDUCATION } from "../actions/actions";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_EDUCATION:
            return action.payload;
        default:
            return state;
    }
}