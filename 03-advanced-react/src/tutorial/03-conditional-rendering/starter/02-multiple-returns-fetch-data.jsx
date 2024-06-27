import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

/***
 * 메서드명: MultipleReturnsFetchData
 * 설명: isLoading, isError 에 따른 컴포넌트 결과예제
 */
const MultipleReturnsFetchData = () => {
    const [user, setUser] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw Error("status 404");
                }

                const user = await response.json();
                setUser(user);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsError(true);
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (isLoading) {
        return <h2>Loading ...</h2>;
    } else if (isError) {
        return <h2>There was an error ...</h2>;
    } else {
        // console.log(user);
        const { id, avatar_url, html_url, name, company } = user;

        return (
            <div>
                <img
                    src={avatar_url}
                    alt={name}
                    style={{ width: "200px", borderRadius: "24px" }}
                />
                <h2>{name}</h2>
                <h4>work at {company}</h4>
            </div>
        );
    }
};

export default MultipleReturnsFetchData;
