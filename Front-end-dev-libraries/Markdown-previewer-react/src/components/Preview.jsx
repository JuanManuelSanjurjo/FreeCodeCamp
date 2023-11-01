import PropTypes from "prop-types";
import Markdown from 'marked-react';


const Preview = ({content}) => {
    
    return (
        <div  className="preview">
            <h1 className='titles'> &lt;/&gt; Preview</h1>
            <div id="preview" className="textarea" readOnly>  
                <Markdown breaks={true} gfm={true}>{content}</Markdown>
            </div>
         </div>
    );
}

Preview.propTypes = {
    content: PropTypes.string
}

export default Preview;