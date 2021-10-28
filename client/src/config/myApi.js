import axios from "axios";

const atlasApi = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/' : process.env.REACT_APP_API_URL
  });

export  { atlasApi }