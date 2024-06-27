import { useState, useEffect } from "react";

const useFetchUser = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await fetch(url);
                // console.log(resp);
                if (!resp.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }

                const theUser = await resp.json();
                setUser(theUser);
            } catch (error) {
                setIsError(true);
                // console.log(error);
            }
            // hide loading
            setIsLoading(false);
        };
        fetchUser();
    }, []);
    // order matters
    // don't place user JSX before loading or error

    return { isLoading, isError, user };
};

export default useFetchUser;
