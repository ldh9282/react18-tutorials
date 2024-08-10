import axios from "axios";

const authFetch = axios.create({
    baseURL: "https://www.course-api.com",
});

authFetch.interceptors.request.use(
    (request) => {
        debugger;
        request.headers["Accept"] = "application/json";
        console.log("request sent");
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);
authFetch.interceptors.response.use(
    (response) => {
        debugger;
        console.log("got response");
        return response;
    },
    (error) => {
        console.log(error.toString());
    }
);

export default authFetch;
