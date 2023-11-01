import { useEffect, useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";


const App = () =>{
    const [text, setText] = useState(defaultContent);

    useEffect(()=>{
      setText(defaultContent);
    },[])

    return (
    <div className="container">
      <Editor text={text} setText={setText} />
      <Preview content={text}/>
    </div>
    )

}

export default App;

const defaultContent = `# Markdown syntax guide 
\n# This is a Heading h1 
\n## This is a Heading h2 
\n You may be using [Markdown Live Preview](https://markdownlivepreview.com/). 
\n## Inline code
\nThis web site is using  \`markedjs/marked \`.
\n\`\`\`js \nlet message = \`Hello world\`\nalert(message);
\n\`\`\` 
\n## Blockquotes
\n>  Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
> 
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
\n### Unordered
\n* Item 1
\n* Item 2
\n* Item 2a
\n* Item 2b
\n![This is a alt text.](../../public/vite.svg 'This is the vite svg logo.')
\n **This text will be bold**  
\n__This will also be bold__
`;
