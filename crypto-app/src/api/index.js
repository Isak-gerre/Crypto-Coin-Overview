import axios from "axios";

const url = "http://localhost:8000";

export const fetchData = () => axios.get(url);
