import { useState } from "react";

const ShortCircuitOverview = () => {
    const [text, setText] = useState("");

    const [name, setName] = useState("susan");

    const codeExample = name && "hello world";

    return (
        <div>
            <h4>Falsy OR : {text || "hello world"}</h4>
            <h4>Falsy AND : {text && "hello world"}</h4>
            <h4>Truety OR : {name || "hello world"}</h4>
            <h4>Truety AND : {name && "hello world"}</h4>
            <h4>{codeExample}</h4>
        </div>
    );
};
export default ShortCircuitOverview;
