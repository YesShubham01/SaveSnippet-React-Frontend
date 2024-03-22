import React, { useState } from 'react';


function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Primitive types or null are copied directly
    }
    if (Array.isArray(obj)) {
        return obj.map(deepCopy); // Deep copy arrays
    }
    const newObj = {};
    for (const key in obj) {
        newObj[key] = deepCopy(obj[key]); // Recursively copy properties
    }
    return newObj;
}

function SnippetTable({ snippet, setSelectedSnippet }) {

    const codes = deepCopy(snippet);

    const [data, setData] = useState(codes.slice(0, 5));

    const onClickSetData = (index) => {
        setData(codes.slice(5 * index, 5 * (index + 1)));
    }


    return (
        <div>
            <div className="mt-6 mx-6 flex flex-col shadow-2xl rounded-lg">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                        >
                                            Username
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                        >
                                            Code Language
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                        >
                                            Stdin
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                        >
                                            Timestamp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {data.map((snip) => (
                                        <tr
                                            key={snip.timestamp}
                                            className={`clickable-row hover:bg-gray-100 hover:border-[#646cff] hover:border-1`} // Add hover class
                                            onClick={() => setSelectedSnippet(snip)}
                                        >
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="text-sm font-medium text-gray-900">{snip.username}</div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="text-sm text-gray-900 ">{snip.language}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="text-sm text-gray-900">{snip.stdin}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-900">
                                                {snip.timestamp}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex items-center justify-center pt-6">
                <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
                    <span className="hidden lg:block">&larr; Previous</span>
                    <span className="block lg:hidden">&larr;</span>
                </a>
                <button
                    onClick={() => { onClickSetData(0); }}
                    href="#"
                    className="bg-transparent mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
                >
                    1
                </button>
                <button
                    onClick={() => { onClickSetData(1); }}
                    href="#"
                    className="bg-transparent mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
                >
                    2
                </button>
                <button
                    onClick={() => { onClickSetData(2); }}


                    href="#"
                    className="bg-transparent mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
                >
                    3
                </button>
                <button
                    onClick={() => { onClickSetData(3); }}


                    href="#"
                    className="bg-transparent mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
                >
                    4
                </button>

                <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
                    <span className="hidden lg:block">Next &rarr;</span>
                    <span className="block lg:hidden">&rarr;</span>
                </a>
            </div>
        </div>


    );
}

export default SnippetTable;
