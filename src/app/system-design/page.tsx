import Link from "next/link";

const SystemDesignContainer = () => {
  return (
    <div className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold underline text-xl">System Design Container</h1>
      <ul className="py-4">
        <li className="my-2 cursor-pointer">
          <Link href="/system-design/google-search-bar">
            {" "}
            🔍 Google Search Bar
          </Link>
        </li>
        <li className="my-2 cursor-pointer">
          <Link href="/system-design/infinite-scroll">🔄 Infinite Scroll</Link>
        </li>
        <li className="my-2 cursor-pointer">
          <Link href="/system-design/youtube-live-stream-chat">
            📺💬 YouTube Live Stream Chat UI
          </Link>
        </li>
        <li className="my-2 cursor-pointer">
          <Link href="/system-design/autosuggest-typeahead">
            📝 Autosuggest or Typeahead Suggestions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SystemDesignContainer;
