import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SnippetBox = ({selectedSnippet}) => {
    const codeString = selectedSnippet?.code ?? "Hello there! </>"; // Use empty string as a default

    console.log("code:", selectedSnippet.code);

    const [isCopied, setCopied] = useState(); // bool
    const copyFunction = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(
            () => {
                setCopied(false);
            }, 3000
        );

    };
    return (
        <div className='logo'>
            <div className='mt-6 rounded-xl overflow-hidden bg-[#3a404d]'>
                <div className='flex justify-between px-4 py-1 text-white text-xs items-center'>
                    <p className='text-sm'>{selectedSnippet.username + "'s "} Code Snippet</p>
                    {isCopied ? (<button
                        onClick={copyFunction}
                        className='bg-transparent py-1 inline-flex items-center gap-1' >
                        <span className='text-baseline mt-1'>
                            <ion-icon name="checkmark-sharp"></ion-icon>
                        </span>
                        Copied
                    </button>) : <button
                        onClick={copyFunction}
                        className='bg-transparent py-1 inline-flex items-center gap-1'>
                        <span className='text-baseline mt-1'>
                            <ion-icon name="clipboard-outline"></ion-icon>
                        </span>
                        Copy code
                    </button>}
                </div>
                <SyntaxHighlighter
                    language="javascript"
                    style={atomOneDark}
                    showLineNumbers={true}
                    wrapLongLines={true}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default SnippetBox