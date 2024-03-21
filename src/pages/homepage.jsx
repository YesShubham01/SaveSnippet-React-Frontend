import React, { useState } from 'react';
import HomePage2 from './HomePage2'
import { Link } from 'react-router-dom';


function HomePage() {
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
        <div style={{ padding: '20px' }}>
            <h1 className='logoFont'>SaveSnippet</h1>
            <HomePage2 />
        </div>
    );
}

export default HomePage;
