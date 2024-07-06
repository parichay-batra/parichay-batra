"use client";

import { useEffect, useState } from "react";
import SearchResults from "./searchResults/page";
import { fetchAutocompleteResults } from "@/utils/services";
const Autosuggest = () => {
  const [cache, setCache] = useState({});
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState([]);
  const fetchResults = async () => {
    if (cache[query]) {
      setSearchResults(cache[query]);
      return;
    }

    const response = await fetchAutocompleteResults(query);
    setSearchResults(response);
    setCache((prev) => {
      return {
        ...prev,

        [query]: response,
      };
    });
  };

  useEffect(() => {
    const intervalId = setTimeout(fetchResults, 200);

    return () => clearTimeout(intervalId);
  }, [query]);

  return (
    <div className="w-10/12 mx-auto left-0 right-0  p-4 m-4">
      <h1 className="text-3xl font-bold">Autosuggest/Typeahead </h1>
      <input
        type="text"
        placeholder="Search"
        className="w-full my-8 p-4 border border-black  rounded-lg"
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default Autosuggest;
