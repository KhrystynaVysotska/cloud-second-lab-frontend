import axios from "axios";
import { BASE_DB_URL } from "../../constants/url";

export const Axios = axios.create({
  baseURL: BASE_DB_URL,
});
