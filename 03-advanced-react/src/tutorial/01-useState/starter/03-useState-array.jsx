import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);

    const removeItem = (id) => {
        setPeople(people.filter((person) => person.id !== id));
    };
    const clearAll = () => {
        setPeople([]);
    };
    return (
        <div>
            {people.map((person) => {
                const { id, name } = person;

                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button type="button" onClick={() => removeItem(id)}>
                            remove
                        </button>
                    </div>
                );
            })}
            <div style={{ marginTop: "2rem" }}>
                <button
                    type="button"
                    className="btn"
                    onClick={clearAll}
                    style={{ marginRight: "1rem" }}
                >
                    clear all
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => setPeople(data)}
                >
                    reset
                </button>
            </div>
        </div>
    );
};

export default UseStateArray;
