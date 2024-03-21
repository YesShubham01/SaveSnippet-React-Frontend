import { X } from 'lucide-react'
import React, { useState } from 'react';
import Button from './HomePage Components/Button';
import InputTextComponent from './HomePage Components/InputTextComponent'
import SelectComponent from './HomePage Components/SelectComponent';
import InputTextArea from './HomePage Components/InputTextArea';
import SnippetBox from '../components/SnippetBox'


function HomePage2() {
    const [username, setUsername] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('');
    const [standardInput, setStandardInput] = useState('');
    const [sourceCode, setSourceCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Here you can process the form data (username, preferredLanguage, standardInput, sourceCode)
        console.log('Form Submitted!');
        console.log('Username:', username);
        console.log('Preferred Language:', preferredLanguage);
        console.log('Standard Input:', standardInput);
        console.log('Source Code:', sourceCode);
        // You can send the data to a server using fetch or axios for further processing
        setUsername('');
        setPreferredLanguage('');
        setStandardInput('');
        setSourceCode('');
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

                    <Button />
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePage2;
