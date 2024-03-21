import React, { useState } from 'react'
import SnippetTable from './ResultPage Components/SnippetTable'
import SnippetBox from '../components/SnippetBox'

export async function fetchAllSnippets() {
    try {
        const response = await fetch("http://localhost:8080/api/snippet/getAllSnippet");
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw for potential error handling in caller
    }
}

export const snippets = await fetchAllSnippets();


function ResultPage() {

    const [selectedSnippet, setSelectedSnippet] = useState("");
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
                    snippet={snippets}
                    setSelectedSnippet={setSelectedSnippet}
                />
                <SnippetBox selectedSnippet={selectedSnippet}/>
            </section>
        </>
    )
}

export default ResultPage