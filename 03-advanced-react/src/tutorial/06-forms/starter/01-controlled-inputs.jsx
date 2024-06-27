import { useState } from "react";

const isDebugEnabled = true;

const ControlledInputs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form
            className="form"
            onSubmit={(e) => {
                e.preventDefault();
                if (isDebugEnabled) {
                    console.log(name, email);
                }
            }}
        >
            <h4>controlled inputs</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    name
                </label>
                <input
                    type="text"
                    className="form-input"
                    id="name"
                    value={name}
                    onChange={(e) => {
                        if (isDebugEnabled) {
                            console.log(e.target.id + " ::: " + e.target.value);
                        }
                        setName(e.target.value);
                    }}
                />
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-input"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        if (isDebugEnabled) {
                            console.log(e.target.id + " ::: " + e.target.value);
                        }
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <button type="submit" className="btn btn-block">
                submit
            </button>
        </form>
    );
};
export default ControlledInputs;
