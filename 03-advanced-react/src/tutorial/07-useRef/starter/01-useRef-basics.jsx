import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
    const isDebugEnabled = true;
    const [value, setValue] = useState(0);
    const refContainer = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        refContainer.current.focus();
    });
    useEffect(() => {
        if (isDebugEnabled) {
            console.log(isMounted);
        }
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        if (isDebugEnabled) {
            console.log("re-render");
        }
    }, [value]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isDebugEnabled) {
            console.log(refContainer.current);
            console.log(refContainer.current.value);
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="form-input"
                        ref={refContainer}
                    />
                </div>
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
            <h1>value : {value}</h1>
            <button onClick={() => setValue(value + 1)} className="btn">
                increase
            </button>
        </div>
    );
};

export default UseRefBasics;
