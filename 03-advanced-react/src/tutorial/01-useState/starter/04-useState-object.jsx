import { useState } from "react";

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "peter",
        age: 24,
        hobby: "read books",
    });

    const displayPerson = () => {
        setPerson({
            name: "john",
            age: 28,
            hobby: "scream at the computer",
        });
    };
    return (
        <div>
            <div>{person.name}</div>
            <div>{person.age}</div>
            <div>Enjoys: {person.hobby}</div>
            <button type="button" className="btn" onClick={displayPerson}>
                show john
            </button>
        </div>
    );
};

export default UseStateObject;
