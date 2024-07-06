"use client";
import { REDDIT_COMMENTS } from "@/utils/constants";
import CommentBox from "./commentBox";

const NestedComments = () => {
  const commentData = REDDIT_COMMENTS;
  return (
    <div>
      <CommentBox data={commentData}></CommentBox>
    </div>
  );
};

export default NestedComments;
