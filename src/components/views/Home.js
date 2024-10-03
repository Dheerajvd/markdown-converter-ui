import React from 'react';
import Editor from '../shared/Editor';
import Preview from '../shared/Preview';
import { useDispatch, useSelector } from 'react-redux';
import { updateMarkdown } from '../../redux/markdownSlice';
import toastService from '../../services/toastService';
import documentService from '../../services/documentService';

const Home = () => {
    const markdown = useSelector((state) => state.markdown.content);
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(updateMarkdown(''));
        toastService.info('Editor has been succesfully reset');
    };

    const handleDownload = () => {
        if (markdown === '') {
            toastService.warn('Editor is empty')
            return
        };
        documentService.download(markdown, 'text/markdown', 'document.md');
        toastService.success('File succesfully downloaded')
    };
    return (
        <div className="app">
            <div className='screens'>
                <div className="editor-section">
                    <h2>Markdown Editor</h2>
                    <Editor />
                </div>
                <div className="preview-section">
                    <h2>Live Preview</h2>
                    <Preview />
                </div>

            </div>
            <div className="button-section">
                <button onClick={()=>handleReset()} className="btn btn-reset">Reset</button>
                <button onClick={()=>handleDownload()} className="btn btn-download">Download Markdown File</button>
            </div>
        </div>
    );
};

export default Home;
