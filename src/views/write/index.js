import React, { useState } from "react";
import { Content } from "../../elements/common/index";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../styles/editor/editor.css";

import {
  Container,
  FormGroup,
  Label,
  Input,
  Button,
} from "../../elements/write/index";

const Write = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const updateEditorState = (state) => setEditorState(state);

  return (
    <Content>
      <Container>
        <FormGroup>
          <Label htmlFor="title">Post title</Label>
          <Input type="text" id="title" placeholder="Enter title..." />
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
        <Button type="submit">Publish</Button>
      </Container>
    </Content>
  );
};

export default Write;
