import React from 'react'

function InputTextComponent({ text, placeHolder, value, onChangeFunction }) {
  return (
    <div className="mt-4 w-full">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="name"
      >
        {text}
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder={placeHolder}
        id="name"
        value = {value}
        onChange={(e) => onChangeFunction(e.target.value)}
        required
      ></input>
    </div>

  )
}

export default InputTextComponent