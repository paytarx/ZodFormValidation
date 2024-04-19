import React from 'react'
import {z} from 'zod'
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Zod2 = ({onFormState , onHandleChange , onHandleSubmit , userSchema}) => {

    

  return (
    <div>

        <form onSubmit={onHandleSubmit}>
        <input
        className='border-2 border-cyan-300 rounded-xl p-2 m-2'
        type='text'
        name="name"
        value={onFormState.name}
        onChange={onHandleChange}
        placeholder = "Name"
        >
        </input>

        <input
        className='border-2 border-cyan-300 rounded-xl p-2 m-2'
        type='number'
        name="age"
        value={onFormState.age}
        onChange={onHandleChange}
        placeholder = "Age"
        >
        </input>
        <input
        className='border-2 border-cyan-300 rounded-xl p-2 m-2'
        type='text'
        name="city"
        value={onFormState.city}
        onChange={onHandleChange}
        placeholder = "City"
        >
        </input>
        <button
        type='submit'
        className='border-2 bg-cyan-300  rounded-xl p-2 m-2'
        >
            Submit
        </button>
        </form>

        <div className='flex flex-col gap-4 mt-4 m-2'>
             {
                onFormState.name.length > 3 ? <p className='flex bg-green-500 text-white font-semibold p-2 px-2 
                w-48 rounded-xl duration-500'> Name is valid <span className='justify-center my-auto mx-4'> <FaCheck /> </span> </p>:(
                <p className='flex text-white bg-red-500 font-semibold p-2 px-2 w-48 rounded-xl duration-500'>Username is invalid <span className='justify-center my-auto mx-2'> <FaTimes /> </span> </p>)
             }
             {
                onFormState.age > 18 ? <p className='flex bg-green-500 text-white font-semibold p-2 px-2 w-48 rounded-xl duration-500'> Age is valid <span className='justify-center my-auto mx-4'> <FaCheck /> </span> </p> : <p className='flex text-white bg-red-500 font-semibold p-2 px-2 w-48 rounded-xl duration-500'> Age is invalid <span className='justify-center my-auto mx-2'> <FaTimes /> </span> </p>
             }
             {
                onFormState.city.length > 3 ? <p className='flex bg-green-500 text-white font-semibold p-2 px-2 w-48 rounded-xl duration-500'> City is valid <span className='justify-center my-auto mx-4'> <FaCheck /> </span> </p>:(  <p className='flex text-white bg-red-500 font-semibold p-2 px-2 w-48 rounded-xl duration-500'>City is invalid <span className='justify-center my-auto mx-2'> <FaTimes /> </span> </p>)
             }
        </div>


    </div>
  )
}

export default Zod2