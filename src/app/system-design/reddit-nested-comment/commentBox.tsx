"use client";
import Image from "next/image";

const CommentBox = ({ data }): any => {
  console.log(data);
  return (
    <div>
      {data.map((comment, index) => {
        return (
          <div className="flex" key={index}>
            <div className="my-4 pl-4 border-black border-l-2">
              <Image
                src={comment.photoURL}
                alt="user image"
                width={45}
                height={45}
                priority
                className="rounded-full"
              />
            </div>
            <div className="m-4">
              <p className="font-bold">{comment.username} </p>
              <p>{comment.comment}</p>
              <div>
                {comment.replies ? <CommentBox data={comment.replies} /> : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
