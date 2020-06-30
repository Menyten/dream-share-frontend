import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Content } from "../../elements/common";
import { EndMessage } from "../../elements/start";
import { EditorState, convertFromRaw } from "draft-js";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../styles/editor/readOnlyEditor.css";

import Post from "../../components/post";

import fetchy from "../../utils/fetchy";
import truncate from "../../utils/truncateEditorState";

const Start = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    handlePosts();
    /* eslint-disable-next-line */
  }, []);

  const getPosts = async () => {
    const res = await fetchy.get(`/posts?page=${page}`);
    const data = await res.json();
    !data.length && setHasMore(false);
    setPosts([...posts, ...data]);
  };

  const handlePosts = () => {
    getPosts();
    setPage(page + 1);
  };

  const Posts = () =>
    posts.map(({ _id, title, content }) => {
      const state = convertFromRaw(content);
      const editorState = truncate(EditorState.createWithContent(state), 100);
      return (
        <Post
          key={_id}
          title={title}
          content={editorState}
          onClick={() => history.push(`/post/${_id}`)}
        />
      );
    });

  return (
    <Content id="scrollable-content">
      <InfiniteScroll
        scrollableTarget="scrollable-content"
        dataLength={posts.length}
        next={handlePosts}
        hasMore={hasMore}
        endMessage={
          <EndMessage>
            You've reached the end. Check back later for more! :)
          </EndMessage>
        }
      >
        <Posts />
      </InfiniteScroll>
    </Content>
  );
};

export default Start;
