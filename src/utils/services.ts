import { GOOGLE_SEARCH_API_ENDPOINT } from "./constants";

export const fetchGoogleData = async (searchText : string) => {
    if (searchText.trim() === "") return [];

    try {
      const data = await fetch(`${GOOGLE_SEARCH_API_ENDPOINT}&q=${searchText}`);
      const response = await data.json();
      return response[1];
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };