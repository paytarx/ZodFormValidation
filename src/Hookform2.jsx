import React from 'react'
import { useForm } from 'react-hook-form'

const Hookform2 = () => {
    const {handleSubmit , register , formState: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input className='border-2 border-cyan-300 rounded-xl p-2 m-2' {...register('Username' , {required: true})}/>
        {errors.Username && <span>Username is invalid</span>}
        <input className='border-2 border-cyan-300 rounded-xl p-2 m-2' {...register('E-mail', {required: true})} />
        </form>
    </div>
  )
}

export default Hookform2