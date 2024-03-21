import React from 'react'

function SnippetTable({snippet}) {
    return (
        <div className="mt-6 mx-6 flex flex-col shadow-2xl rounded-lg">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                    >
                                        <span>Username</span>
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
                                {snippet.map((snip) => (
                                    <tr key={snip.username}>
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
                                            {snip.time}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnippetTable