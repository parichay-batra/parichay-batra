"use client";
import { fetchImagesData, fetchMemesData } from "@/utils/services";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "./loader";

const InfiniteScroll = () => {
  const [memeData, setMemeData] = useState<any[]>([]);
  const [imagesData, setImagesData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showMeme, setShowMeme] = useState<Boolean>(false);
  const shimmer = Array(100).fill(undefined);

  const getMemes = async (req: string = "images") => {
    setIsLoading(true);

    if (req === "images") {
      const data = await fetchImagesData(req);
      setImagesData((prev) => [...prev, ...data]);
    } else {
      const data = await fetchMemesData(req);
      setMemeData((prev) => [...prev, ...data]);
    }

    setIsLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      const req = showMeme ? "meme" : "images";
      getMemes(req);
    }
  };

  useEffect(() => {
    const req = showMeme ? "meme" : "images";
    getMemes(req);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showMeme) {
      getMemes("meme");
    } else {
      getMemes("images");
    }
  }, [showMeme]);

  let iteratableData = [];
  if (showMeme) {
    iteratableData = memeData;
  } else {
    iteratableData = imagesData;
  }

  return (
    <div className="p-4">
      <div className="flex justify-center mt-8">
        <button
          className=" bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setShowMeme(!showMeme)}
        >
          {showMeme ? "Show Images" : "Show Memes"}
        </button>
      </div>
      <div className="flex flex-wrap justify-between m-12">
        {!isLoading
          ? iteratableData.map((data: any, index) => {
              return (
                <div key={index} className="border m-4 rounded-lg">
                  <Image
                    className="w-72 h-72 p-4"
                    src={data.download_url ? data.download_url : data.url}
                    alt={data.author}
                    width={500}
                    height={500}
                  />
                </div>
              );
            })
          : shimmer.map((item, index) => (
              <div key={index}>
                <Loader></Loader>
              </div>
            ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
