import axios from "axios";

export const axiosFetch = async (url) => {
    const { data } = await axios.get(url);
    return data;
  };
  