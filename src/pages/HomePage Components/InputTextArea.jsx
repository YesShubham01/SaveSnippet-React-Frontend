import React from 'react'

function InputTextArea({text, value, setValue, selectedLanguage}) {
    return (
        <div><div className="grid w-full  items-center gap-1.5 pt-5">
            <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="message"
            >
                {text + " " + selectedLanguage}
            </label>
            <textarea
                className="flex h-60 w-full rounded-md border text-gray-700 border-gray-400 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50  focus:ring-gray-400 focus:ring-offset-gray-900"
                id="message"
                placeholder="Enter your code here"
                cols={3}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div></div>
    )
}

export default InputTextArea