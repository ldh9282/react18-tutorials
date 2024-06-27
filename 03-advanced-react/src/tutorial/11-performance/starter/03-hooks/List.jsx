import { memo } from "react";
import Item from "./Person";

const List = ({ people, removePerson }) => {
    return (
        <div>
            {people.map((person) => {
                return (
                    <Item
                        key={person.id}
                        {...person}
                        removePerson={removePerson}
                    />
                );
            })}
        </div>
    );
};
// export default List;
export default memo(List); // 부모 컴포넌트 리렌더링 되어도 리렌더링 되지 않음
