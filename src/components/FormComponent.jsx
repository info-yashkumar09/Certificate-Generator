import React, { useState } from 'react'

const FormComponent = () => {

    const [name, setName] = useState("")

    const handleChange = (e)=>{
        setName(e.target.value)
    }

  return (
    <div className='lg:col-span-1 bg-white p-6 shadow-sm rounded-xl'>
        <h1 className='text-xl font-semibold mb-4'>Generate Certificate</h1>
        <div className='space-y-3'>
            <label className='block'>
                <span className='text-sm font-medium text-gray-700'>Recipient's name</span>
                <input type="text" value={name}
                onChange={handleChange} placeholder="Enter Recipient's  name" 
                className='w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none mt-1'
                />
            </label>
            <button className='w-full py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 cursor-pointer'>Update Preview</button>
        </div>
    </div>
  )
}

export default FormComponent