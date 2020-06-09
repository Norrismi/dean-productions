import axios from "axios";
const Endpoint = process.env.REACT_APP_ENDPOINT;

export default axios.create({ baseURL: Endpoint});
