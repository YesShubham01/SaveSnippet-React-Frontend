import { X } from 'lucide-react'
import React, { useState } from 'react';
import Button from './HomePage Components/Button';
import InputTextComponent from './HomePage Components/InputTextComponent'
import SelectComponent from './HomePage Components/SelectComponent';
import InputTextArea from './HomePage Components/InputTextArea';
import { useNavigate } from 'react-router-dom';



function HomePage2() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('');
    const [standardInput, setStandardInput] = useState('');
    const [sourceCode, setSourceCode] = useState('');
    const [isDataSaved, setIsDataSaved] = useState('');
    const [isLoading, setIsLoading] = useState('');


    const handleSubmit = async () => {
        setIsLoading(true);

        const currentTime = new Date().toLocaleTimeString();
        try {
            const response = await fetch('https://savesnippet.onrender.com/api/snippet/createSnippet', {
                method: 'POST', // Specify POST for sending data
                body: JSON.stringify({ username: username, language: preferredLanguage, stdin: standardInput, timestamp: currentTime, code: sourceCode }), // Format data as JSON
                headers: { 'Content-Type': 'application/json' }, // Set content type
            });
            setIsDataSaved(true);

            navigate('/result'); // Navigate to '/result' route
        }
        catch (error) {
            setIsDataSaved(false);
            console.error('Error fetching data:', error);
        }

        setIsLoading(false);

    };

    const languageOptions = ["C++", "Java", "JavaScript", "Python"];


    return (
        <div className='logo'>
            <div className="mx-auto my-5 max-w-4xl md:my-6 bg-white rounded-xl shadow-2xl overflow-hidden ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Contact Info */}
                    <div className="px-5 py-6 text-gray-900 md:px-8">
                        <div className="flow-root">
                            <div className="-my-6 divide-y divide-gray-200">
                                <div className="py-6">
                                    <form>
                                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                                            <div>
                                                <InputTextComponent
                                                    text="Username"
                                                    placeHolder="Enter your username"
                                                    value={username}
                                                    onChangeFunction={setUsername}
                                                />
                                            </div>
                                            <hr className="my-8" />
                                            <SelectComponent
                                                text="Preferred Code Language"
                                                setValue={setPreferredLanguage}
                                                options={languageOptions}
                                            />

                                            <hr className="my-8" />
                                            <div>
                                                <InputTextComponent
                                                    text="Standard Input"
                                                    placeHolder="Enter standard input"
                                                    value={standardInput}
                                                    onChangeFunction={setStandardInput}
                                                />
                                            </div>


                                            {/* <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                >
                                                    Make payment
                                                </button>
                                            </div> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product List */}
                    <div className="bg-gray-200 px-5 py-6 md:px-8">
                        <div className="flow-root">
                            <InputTextArea
                                text="Source Code:"
                                value={sourceCode}
                                setValue={setSourceCode}
                                selectedLanguage={preferredLanguage}
                            />
                            {/* <SnippetBox/> */}
                        </div>
                        <hr className="mt-6 border-gray-200" />

                        {isLoading ?
                            <p className='text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Loading data...</p> : <Button onClickCallback={handleSubmit} />}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage2;
