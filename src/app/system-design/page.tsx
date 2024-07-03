import Link from "next/link";

const SystemDesignContainer = () => {
  return (
    <div className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-lg">System Design Container</h1>
      <ul className="py-4">
        <li className="underline cursor-pointer">
          <Link href="/system-design/google-search-bar">Google Search Bar</Link>
        </li>
        <li className="underline cursor-pointer">
          <Link href="/system-design/infinite-scroll">Infinite Scroll</Link>
        </li>
      </ul>
    </div>
  );
};

export default SystemDesignContainer;
