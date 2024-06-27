import { useState } from "react";

const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
    const isDebugEnabled = true;

    const [shipping, setShipping] = useState(false);

    const [theFramework, setTheFramework] = useState("react");

    return (
        <div>
            <form className="form">
                <h4>Other Inputs</h4>
                {/* name */}
                <div className="form-row" style={{ textAlign: "left" }}>
                    <label htmlFor="shipping"> Free Shipping </label>
                    <input
                        type="checkbox"
                        name="shipping"
                        id="shipping"
                        checked={shipping}
                        onChange={(e) => {
                            if (isDebugEnabled) {
                                console.log(e.target.checked);
                                console.log(
                                    e.target.checked ? "체크된" : "체크해제된"
                                );
                            }
                            setShipping(e.target.checked);
                        }}
                    />
                </div>
                <div className="form-row" style={{ textAlign: "left" }}>
                    <label htmlFor="theFramework" className="form-label">
                        Framework
                    </label>
                    <select
                        name="theFramework"
                        id="theFramework"
                        onChange={(e) => {
                            setTheFramework((v) => {
                                if (isDebugEnabled) {
                                    console.log("현재 ::: " + v);
                                    console.log(
                                        "selected ::: " + e.target.value
                                    );
                                }
                                return e.target.value;
                            });
                        }}
                    >
                        {frameworks.map((framework) => {
                            return (
                                <option key={framework} value={framework}>
                                    {framework}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
        </div>
    );
};
export default OtherInputs;
