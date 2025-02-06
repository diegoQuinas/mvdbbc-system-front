import axios from "axios";

const apiV1 = axios.create({
    baseURL: `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/api/v1`,
    });


    export default apiV1