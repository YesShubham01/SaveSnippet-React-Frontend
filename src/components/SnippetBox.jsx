import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SnippetBox = () => {
    const codeString = `import React from 'react'
    import SnippetTable from './ResultPage Components/SnippetTable'
    import SnippetBox from '../components/SnippetBox'
    
    const snippet = [
        {
            username: 'Shubham Puhal',
            language: 'Python',
            stdin: '12 24',
            time: '10:00',
        },
    
    
    ]
    
    function ResultPage() {
        return (
    
            <>
                <section className="mx-auto w-full max-w-7xl px-4 py-4 text-left">
                    <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
                        <div />
                        <div>
                            <button
                                type="button"
                                className="shadow-2xl rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add Snippet
                            </button>
                        </div>
                    </div>
                    <SnippetTable
                    snippet={snippet}
                    />
                    <SnippetBox/>
                </section>
            </>
        )
    }
    
    export default ResultPage`;

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
                    <p className='text-sm'>Snippet</p>
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