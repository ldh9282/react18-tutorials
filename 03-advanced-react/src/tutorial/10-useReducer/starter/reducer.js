import { data } from "../../../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

/**
 * 메소드명: reducer
 * 설명: state 상태변화를 위한  핸들러
 * @param {object} state
 * @param {object} action
 * @returns {object} 상태변화한 state
 * @throws No matching action type Error
 */
const reducer = (state, action) => {
    if (action.type === CLEAR_LIST) {
        return { ...state, people: [] };
    } else if (action.type === RESET_LIST) {
        return { ...state, people: data };
    } else if (action.type === REMOVE_ITEM) {
        const removedId = action.payload.id;
        let thePeople = state.people.filter(
            (person) => person.id !== removedId
        );
        return { ...state, people: thePeople };
    } else {
        throw new Error(`No matching action type Error ::: ${action.type}`);
    }
};

export default reducer;
