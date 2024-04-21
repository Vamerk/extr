import React from "react";
import { publication } from "../TESTDATA/Post";
import PostBlock from "../components/Postblock";
import { FilterHeader } from "../modules";

const Post = () => {
  return (
    <div className="flex flex-row justify-between gap-x-4">
      <div className="flex flex-col flex-grow gap-y-3 overflow-y-auto">
        {publication.map((post, index) => (
          <PostBlock publication={post} key={index} handleClick />
        ))}
      </div>
      <div>
        <FilterHeader name="Post" />
      </div>
    </div>
  );
};

export default Post;
