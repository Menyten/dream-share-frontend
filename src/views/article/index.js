import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "../../elements/common";
import { EditorState, convertFromRaw } from "draft-js";

import Post from "../../components/post";

import fetchy from "../../utils/fetchy";

const Article = () => {
  const { id } = useParams();
  const [editorState, setEditorState] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await fetchy.get(`/post/${id}`);
      const data = await res.json();
      setEditorState(convertToEditorState(data.content));
      setTitle(data.title);
    };
    getPost();
  }, [id]);

  const convertToEditorState = (content) =>
    EditorState.createWithContent(convertFromRaw(content));

  return (
    <Content>
      {editorState && <Post title={title} content={editorState} />}
    </Content>
  );
};

export default Article;
