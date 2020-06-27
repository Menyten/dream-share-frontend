import React, { useEffect, useState } from "react";
import { Content } from "../../elements/common";
import { EditorState, convertFromRaw } from "draft-js";
import "../../styles/editor/readOnlyEditor.css";

import Post from "../../components/post";

import fetchy from "../../utils/fetchy";
import truncate from "../../utils/truncateEditorState";

const Start = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetchy.get("/posts");
      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  const Posts = () =>
    posts.map(({ _id, title, content }) => {
      const state = convertFromRaw(content);
      const editorState = truncate(EditorState.createWithContent(state), 200);
      return <Post key={_id} title={title} content={editorState} />;
    });

  return (
    <Content>
      <Posts />
    </Content>
  );
};

export default Start;
