import React from 'react'
import { useForm } from 'react-hook-form'

const Hookform2 = () => {
    const {handleSubmit , register , formState: {errors} } = useForm();
   
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div>
      <form className='border-2 border-black p-8' onSubmit={handleSubmit(onSubmit)}>
    <div className='flex'>
    <div className='flex flex-col justify-center text-center'>
    <label className='font-semibold'>Username</label>
     <input className='border-2 border-cyan-300 rounded-xl p-2 m-2' {...register('username', { required: true })} />
    </div>
     {errors.username && <span className='mt-8 mb-2 mx-2 bg-red-500 p-2 rounded-xl text-white'>İnvalid username</span>}
    </div>
     
     <div className='flex'>
     <div className='flex flex-col justify-center text-center'>
     <label className='font-semibold'>Email</label>
     <input  className='border-2 border-cyan-300 rounded-xl p-2 m-2' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
     </div>
     {errors.email && <span className='mt-8 mb-2 mx-2 bg-red-500 p-2 rounded-xl text-white'>İnvalid e-mail adress</span>}
     </div>

    <div className='flex'>
     <div className='flex flex-col justify-center text-center'>
     <label className='font-semibold'>Password</label>
     <input type='password'  className='border-2 border-cyan-300 rounded-xl p-2 m-2' {...register('password', { required: true, minLength: 8 })} />
     </div>
     {errors.password && <span className='mt-8 mb-2 mx-2 bg-red-500 p-2 rounded-xl text-white'>Must be password length at 8 characters</span>}
    </div>
     
     
     <div className='m-4 mt-6'>
     <button className='p-2 bg-cyan-300 rounded-xl hover:scale-110 active:scale-105' type="submit">Submit</button>
     </div>
   </form>
    </div>
  )
}

export default Hookform2



