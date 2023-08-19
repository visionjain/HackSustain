import axios from "axios";
import { config } from "../shared/config";
import { API } from "../shared/constants";

const api = axios.create({
  baseURL: `${config.API_URL}${API.prefix}`,
});
