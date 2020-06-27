import React, { useState } from "react";
import { Content } from "../../elements/common/index";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../styles/editor/editor.css";

import {
  Container,
  FormGroup,
  Label,
  Input,
  Button,
} from "../../elements/write/index";

import fetchy from "../../utils/fetchy";

const Write = () => {
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const updateEditorState = (state) => setEditorState(state);
  const updateTitle = (e) => setTitle(e.target.value);

  const testPost = async (e) => {
    e.preventDefault();
    const res = await fetchy.post("/posts", {
      title,
      content: convertToRaw(editorState.getCurrentContent()),
    });
    if (!res.ok) {
      return console.log("Error posting");
    }
    clearFields();
  };

  const clearFields = () => {
    setTitle("");
    setEditorState(EditorState.createEmpty());
  };

  return (
    <Content>
      <Container>
        <FormGroup>
          <Label htmlFor="title">Post title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Enter title..."
            value={title}
            onChange={updateTitle}
          />
        </FormGroup>
        <Editor
          editorState={editorState}
          onEditorStateChange={updateEditorState}
          editorClassName="editor"
          toolbarClassName="toolbar"
          placeholder="Write down your dream..."
          toolbar={{
            options: ["inline"],
            inline: {
              options: ["bold", "italic", "underline"],
            },
          }}
        />
        <Button
          type="submit"
          disabled={!title || !editorState.getCurrentContent().hasText()}
          onClick={testPost}
        >
          Publish
        </Button>
      </Container>
    </Content>
  );
};

export default Write;
