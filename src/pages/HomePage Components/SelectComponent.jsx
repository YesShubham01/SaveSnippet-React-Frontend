import React from 'react'

function SelectComponent({ text, setValue, options }) {
    return (
        <div className="mt-4 w-full">  {/* Maintain full width */}
            <div className="flex justify-center">  {/* Center the content */}
                <form className="w-full max-w-sm mx-auto"> {/* Constrained max-width and auto-margin */}
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                    >
                        {text}
                    </label>
                    <select
                        id="countries"
                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={(e) => setValue(e.target.value)}
                    >
                        <option selected>Choose your language</option>

                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    )
}

export default SelectComponent
