import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
    const isDebugEnabled = true;

    const [name, setName] = useState("");
    const [users, setUsers] = useState(data);

    return (
        <div>
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (isDebugEnabled) {
                        console.log(
                            "form submit ::: add user" + " ::: " + name
                        );
                    }
                    const theUsers = [...users];

                    let maxId = 0;
                    theUsers.forEach((user) => {
                        if (maxId < user.id) {
                            maxId = user.id;
                        }
                    });

                    const newUser = {
                        id: maxId + 1,
                        name: name,
                    };
                    if (isDebugEnabled) {
                        console.log("new user ::: " + JSON.stringify(newUser));
                    }
                    theUsers.push(newUser);

                    setUsers(theUsers);
                    setName("");
                }}
            >
                <h4>Add User</h4>
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
                                console.log(
                                    e.target.id + " ::: " + e.target.value
                                );
                            }
                            setName(e.target.value);
                        }}
                    />
                </div>

                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <button
                    type="button"
                    className="btn btn-block"
                    id="btnRemoveUser"
                    onClick={() => {
                        if (isDebugEnabled) {
                            console.log("remove user name ::: " + name);
                        }

                        const theUsers = [...users];
                        const newUsers = theUsers.filter(
                            (item) => item.name !== name
                        );

                        setUsers(newUsers);
                        setName("");
                    }}
                >
                    remove
                </button>
            </form>
            <h4>users</h4>
            {users.map((item) => {
                return (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => {
                                if (isDebugEnabled) {
                                    console.log(
                                        "remove the user :::" + item.name
                                    );
                                }
                                const theUsers = [...users];
                                const newUsers = theUsers.filter(
                                    (user) => user.id !== item.id
                                );
                                setUsers(newUsers);
                            }}
                        >
                            remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export default UserChallenge;
