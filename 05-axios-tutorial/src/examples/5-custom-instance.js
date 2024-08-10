import { useEffect } from "react";
import authFetch from "../axios/custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
    const fetchData = async () => {
        try {
            const response = await authFetch("/react-store-products");
            const response2 = await axios(randomUserUrl);
            console.log(response.data);
            console.log(response2.data);
        } catch (error) {
            console.log(error.toString());
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
