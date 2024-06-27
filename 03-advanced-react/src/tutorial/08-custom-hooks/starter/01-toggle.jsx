import { useState } from "react";
import useToggle from "./useToggle";

const ToggleExample = () => {
    // 배열을 할지 오브젝을 할지 취향차이
    // const [show, toggle] = useToggle(false); // custom hook - hook 은 use~ 를 의미
    const { show, toggle } = useToggle(false); // custom hook - hook 은 use~ 를 의미
    return (
        <div>
            <h4>toggle custom hook</h4>
            <button className="btn" onClick={toggle}>
                toggle
            </button>
            {show && <h4>some stuff</h4>}
        </div>
    );
};
export default ToggleExample;
