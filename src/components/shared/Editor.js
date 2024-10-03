import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMarkdown } from '../../redux/markdownSlice';

const Editor = () => {
  const dispatch = useDispatch();
  const markdown = useSelector((state) => state.markdown.content);

  const handleChange = (e) => {
    dispatch(updateMarkdown(e.target.value));
  };

  return (
    <textarea
      value={markdown}
      onChange={handleChange}
      placeholder="Enter Markdown here..."
    />
  );
};

export default Editor;
