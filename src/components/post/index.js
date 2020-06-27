import React from "react";
import { Item, ItemTitle } from "../../elements/start";
import { Editor } from "draft-js";

const Post = ({ _id, title, content }) => {
  return (
    <Item key={_id}>
      <ItemTitle>{title}</ItemTitle>
      <Editor editorState={content} readOnly />
    </Item>
  );
};

export default Post;
