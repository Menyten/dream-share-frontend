import React from "react";
import { Item, ItemTitle } from "../../elements/start";
import { Editor } from "draft-js";

const Post = ({ _id, title, content, onClick = undefined }) => {
  return (
    <Item key={_id} onClick={onClick}>
      <ItemTitle>{title}</ItemTitle>
      <Editor editorState={content} readOnly />
    </Item>
  );
};

export default Post;
