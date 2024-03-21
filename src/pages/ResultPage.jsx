import React from 'react'
import SnippetTable from './ResultPage Components/SnippetTable'
import SnippetBox from '../components/SnippetBox'

const snippet = [
    {
        username: 'Shubham Puhal',
        language: 'JavaScript',
        stdin: '12 24',
        time: '10:00',
    },


]

function ResultPage() {
    return (

        <>
            <h1 className='logoFont'>SaveSnippet</h1>

            <section className="mx-auto w-full max-w-7xl px-4 py-4 text-left">
                <div className="mx-6 flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
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
                <SnippetBox />
            </section>
        </>
    )
}

export default ResultPage