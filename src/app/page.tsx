import Image from "next/image";
import Accordian from "./components/accordian/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-12">
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/74585365?v=4"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <Accordian />
    </main>
  );
}
