import { useCallback, useState } from "react";
import { data } from "../../../../data";
import List from "./List";
const LowerState = () => {
    const [people, setPeople] = useState(data);
    const [count, setCount] = useState(0);

    const removePerson = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }; // 이 함수를 매번 만들어서(함수가 동일하더라도) List에 전달(props이 changed됨)하기 때문에 memo가 작동안하고 리렌더링하게 만듬

    const removePerson2 = useCallback((id) => {
        debugger;
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }, []); // 비효율적 리렌더링 피하는 해결책 -> useCallback hook

    return (
        <section>
            <button
                className="btn"
                onClick={() => setCount(count + 1)}
                style={{ marginBottom: "1rem" }}
            >
                count {count}
            </button>
            <List people={people} removePerson={removePerson2} />
        </section>
    );
};
export default LowerState;
