import axios from "axios";
import { useEffect } from "react";
const productsUrl = "https://www.course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
    const fetchData = async () => {
        try {
            const response = await axios(productsUrl);
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

    return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
