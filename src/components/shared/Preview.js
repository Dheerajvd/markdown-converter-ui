import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { postApi } from '../../api';
import useDebounce from '../../hooks/useDebounce';
import toastService from '../../services/toastService';

const Preview = () => {
  const markdown = useSelector((state) => state.markdown.content);
  const [htmlContent, setHtmlContent] = useState('');

  const debouncedMarkdown = useDebounce(markdown, 300);

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        const response = await postApi('/convert-markdown', { markdown: debouncedMarkdown });
        if (response.data.status === 200) {
          setHtmlContent(response.data.html);
        } else {
          toastService.error(response.data.message)
        }
      } catch (error) {
        const message = 'Error converting markdown:'
        toastService.error(message)
        console.error(message, error);
      }
    };

    if (debouncedMarkdown) {
      convertMarkdown();
    } else {
      setHtmlContent('');
    }
  }, [debouncedMarkdown]);


  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ padding: '20px', border: '1px solid #ddd' }}
    />
  );
};

export default Preview;
