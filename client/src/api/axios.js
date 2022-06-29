import axios from "axios";
import { HOMEPAGE_URL } from "../constants/homepage";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? HOMEPAGE_URL
    : "http://localhost:3001";
//const BASE_URL = HOMEPAGE_URL

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
