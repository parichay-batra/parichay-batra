"use client";
import { fetchGoogleData } from "@/utils/services";
import { useEffect, useState } from "react";

interface cacheData {
  [key: string]: any[]; // This allows dynamic keys with string values and value as array
}

const GoogleSearchBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [cache, setCache] = useState<cacheData>({});

  const queryChangeHandler = async () => {
    if (cache[searchText]) {
      setSearchResult(cache[searchText]);
    } else {
      const results = await fetchGoogleData(searchText);
      setSearchResult(results);
      setCache((prev) => {
        return {
          ...prev,
          [searchText]: results, // Use [query.current!.value] to dynamically set the key
        };
      });
    }
  };

  useEffect(() => {
    const intervalId = setTimeout(() => {
      queryChangeHandler();
    }, 200);
    return () => clearTimeout(intervalId);
  }, [searchText]);

  return (
    <div className="w-1/2 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
      <h1 className="font-bold text-lg text-center text-white ">
        Google Search Bar
      </h1>
      <input
        type="text"
        className="rounded-lg w-full my-4 p-2"
        placeholder="Search Google"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <ul>
        {searchResult.map((result, index) => (
          <li key={index} className="text-white p-1">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSearchBar;
