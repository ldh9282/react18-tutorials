import { useState } from "react";

const useToggle = (defaultValue) => {
    const [show, setShow] = useState(defaultValue);
    const toggle = () => {
        setShow(!show);
    };

    // 배열을 할지 오브젝을 할지 취향차이
    // return [show, toggle];
    return { show, toggle };
};

export default useToggle;
