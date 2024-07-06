import { AUTOSUGGEST_API_ENDPOINT, GOOGLE_SEARCH_API_ENDPOINT, IMAGES_API_ENDPOINT, MEMES_API_ENDPOINT } from "./constants";

export const fetchGoogleData = async (searchText: string) => {
  if (searchText.trim() === "") return [];

  try {
    const data = await fetch(`${GOOGLE_SEARCH_API_ENDPOINT}&q=${searchText}`);
    const response = await data.json();
    return response[1];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const fetchMemesData = async (req: string) => {
  try {
    const data = await fetch(MEMES_API_ENDPOINT);
    const response = await data.json();
    return response.memes;
  } catch (error) {
    console.error("Error fetching data ", error);
  }
};

export const fetchImagesData = async (req: string) => {
  try {
    const data = await fetch(IMAGES_API_ENDPOINT);
    const response = await data.json();
    return response;
  } catch (error) {
    console.error("Error fetching data ", error);
  }
};


export const fetchAutocompleteResults = async (query: string) => {
  try {
    if (query.trim() === "") return [];
    const data = await fetch(`${AUTOSUGGEST_API_ENDPOINT}?query=${query}&hitsPerPage=10`);
    const response = await data.json();
    return response.hits;
  } catch (error) {
    console.error("Error fetching data ", error);
  }
};