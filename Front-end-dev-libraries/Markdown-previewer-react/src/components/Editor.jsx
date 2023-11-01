import PropTypes from 'prop-types';

const Editor = ({text, setText}) => {
    
    return (
        <div className="editor">
            <h1 className="titles"># Editor</h1>
            <textarea id="editor" className="textarea"  onChange={(e) => setText(e.target.value)}  value={text} spellCheck={false}> </textarea>
         </div>
    );

}

Editor.propTypes = {
    text: PropTypes.string,
    setText: PropTypes.func
}

Editor.defaultProps ={
    text:" PropTypes.string"
}

export default Editor;