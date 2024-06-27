import { useState } from "react";

const UseStateBasics = () => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState("abcd");

    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <div>
                {count} : {name}
            </div>
            <button type="button" className="btn" onClick={handleClick}>
                click
            </button>
        </div>
    );
};

export default UseStateBasics;
