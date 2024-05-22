import axios from "axios";
import { getPath } from "@/js/database/utils.js";

const fetchData = async (endpoint) => {
  try {
    const data = await axios.get(endpoint);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDatabase = async () => {
  const [cards, profile, highline, message, request] = await Promise.all([
    fetchData(getPath("cards")).then((res) => res.data),
    fetchData(getPath("profile")).then((res) => res.data),
    fetchData(getPath("highline")).then((res) => res.data),
    fetchData(getPath("message")).then((res) => res.data),
    fetchData(getPath("request")).then((res) => res.data),
  ]);

  return { cards, profile, highline, message, request };
};
