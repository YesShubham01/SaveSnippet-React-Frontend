import React from 'react'
import { useNavigate } from 'react-router-dom';


function Button() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/result'); // Navigate to '/result' route
  };

  return (
<button
onClick={handleButtonClick}
type="button" class="w-full mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    Submit
</button>
  )
}

export default Button