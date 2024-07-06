import Image from "next/image";

const ChatMessage = ({ photoURL, name, message }: any) => {
  return (
    <div className="flex ">
      <div className="my-4 ml-4">
        <Image
          src={photoURL}
          alt="user image"
          width={30}
          height={30}
          priority
          className="rounded-full"
        />
      </div>
      <div className="m-4">
        <span className="font-bold">{name} - </span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
