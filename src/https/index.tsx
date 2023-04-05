import axios from "axios";

const https = axios.create({
  baseURL: process.env.ENDPOINT_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default https;