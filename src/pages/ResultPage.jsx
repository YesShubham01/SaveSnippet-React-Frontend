import React, { useState, useEffect } from 'react';
import SnippetTable from './ResultPage Components/SnippetTable';
import SnippetBox from '../components/SnippetBox';
import { useNavigate } from 'react-router-dom';




function ResultPage() {
    const [snippets, setSnippets] = useState([]);
    // ... other state

    useEffect(() => {
        async function fetchAllSnippets() {
            try {
                const response = await fetch("https://savesnippet.onrender.com/api/snippet/getAllSnippet");
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const data = await response.json();
                const fetchedSnippets = data;
                setSnippets(fetchedSnippets);
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error; // Re-throw for potential error handling in caller
            }
        }
        fetchAllSnippets();
    }, []);

    const [selectedSnippet, setSelectedSnippet] = useState(null); // Initialize selectedSnippet

    const navigate = useNavigate();
    const handleButtonClick = () => {
            navigate('/#'); // Navigate to '/result' route
    };

    return (
        <>
            <h1 className='logoFont'>SaveSnippet</h1>

            <section className="mx-auto w-full max-w-7xl px-4 py-4 text-left">
                <div className="mx-6 flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div />
                    <div>
                        <button
                            type="button"
                            onClick={handleButtonClick}
                            className="shadow-2xl rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Add Snippet
                        </button>
                    </div>
                </div>
                {snippets.length ? (
                    <SnippetTable
                        snippet={snippets}
                        setSelectedSnippet={setSelectedSnippet}
                    />
                ) : (
                    <p>Loading snippets...</p>
                )}


                {
                    selectedSnippet? <SnippetBox selectedSnippet={selectedSnippet} />:
                    <SnippetBox selectedSnippet={{code: "Hello there! </>", username: "Someone"}} />
                }

            </section>
        </>
    );
}

export default ResultPage;
