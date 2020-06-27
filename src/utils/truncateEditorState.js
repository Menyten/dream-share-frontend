import { EditorState, ContentState } from "draft-js";

const truncate = (editorState, charCount = 200) => {
  const contentState = editorState.getCurrentContent();
  const blocks = contentState.getBlocksAsArray();

  let index = 0;
  let currentLength = 0;
  let isTruncated = false;
  const truncatedBlocks = [];

  while (!isTruncated && blocks[index]) {
    const block = blocks[index];
    const length = block.getLength();
    if (currentLength + length > charCount) {
      isTruncated = true;
      const truncatedText = block.getText().slice(0, charCount - currentLength);
      const state = ContentState.createFromText(`${truncatedText}...`);
      truncatedBlocks.push(state.getFirstBlock());
    } else {
      truncatedBlocks.push(block);
    }
    currentLength += length + 1;
    index++;
  }

  if (isTruncated) {
    const state = ContentState.createFromBlockArray(truncatedBlocks);
    return EditorState.createWithContent(state);
  }

  return editorState;
};

export default truncate;
