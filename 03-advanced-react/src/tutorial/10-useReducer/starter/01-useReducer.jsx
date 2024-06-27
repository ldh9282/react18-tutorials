import { useReducer } from "react";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";
import reducer from "./reducer";
import { data } from "../../../data";

/**
 * 변수명: defaultState
 * 설명: 기본 State
 */
const defaultState = {
    people: data,
    isLoading: false,
};

/**
 * 메소드명: ReducerBasics
 * 설명: UI Component
 * @returns
 */
const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const removeItem = (id) => {
        dispatch({ type: REMOVE_ITEM, payload: { id } });
    };

    const clearList = () => {
        dispatch({ type: CLEAR_LIST });
    };
    const resetList = () => {
        dispatch({ type: RESET_LIST });
    };

    return (
        <div>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}
            <div>
                <button
                    className="btn"
                    style={{ marginTop: "2rem" }}
                    onClick={clearList}
                >
                    clear
                </button>
            </div>
            <div>
                <button
                    className="btn"
                    style={{ marginTop: "2rem" }}
                    onClick={resetList}
                >
                    reset
                </button>
            </div>
        </div>
    );
};

export default ReducerBasics;
