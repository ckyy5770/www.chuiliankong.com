import { UPDATE_PAGE_NAME } from "../actions/actions";

export default function(state = "index", action) {
    switch (action.type) {
        case UPDATE_PAGE_NAME:
            return action.payload;
        default:
            return state;
    }
}