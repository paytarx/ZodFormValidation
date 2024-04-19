import React, { useState } from 'react';
import { z } from 'zod';
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Zod2 from './Zod2';

const Zod = () => {
    const userSchema = z.object({
        username: z.string().min(3),
        email: z.string().email().regex(/\.com$/),
        password : z.string().min(8).max(20),
        name: z.string().min(3),
        age: z.number().int().positive(),
        city: z.string().min(3),
    });

    const myForm = () => {
        const [formState, setFormState] = useState({
            username: "",
            email: "",
            password: "",
            name: "",
            age: "",
            city: "",
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormState((prevState) => ({...prevState,[name]: value,}));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            try {
                userSchema.parse(formState);
                if (formState.username.length > 3) {
                    console.log("Username is valid", formState.username);
                } else {
                    console.log("Username invalid", formState.username);
                }
                if (formState.email.includes(".com")) {
                    console.log("Email is valid", formState.email);
                } else {
                    console.log("Email invalid", formState.email);
                } 
                if (formState.password.length > 8 && formState.password.length < 20) {
                    console.log("Password is valid", formState.password);
                } else {
                    console.log("Password invalid", formState.password);
                }
               
            } catch (err) {
                 console.log("Hatalı veya uygun olmayan format" , err.message);
            }
        };

       

        return (
            <div>
                <form>
                    <input
                    className='border-2 border-cyan-300 rounded-xl p-2 m-2'
                        type='text'
                        name='username'
                        value={formState.username}
                        onChange={handleChange}
                        placeholder='Username'
                    />
                    <input
                    className='border-2 border-cyan-300 rounded-xl p-2 m-2'
                        type='email'
                        name='email'
                        value={formState.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                    <input
                    className='border-2 border-cyan-300 rounded-xl p-2 m-2'
                    type='password'
                    name='password'
                    value={formState.password}
                    onChange={handleChange}
                    placeholder='Password 8 - 20'
                    >
                    </input>
                    <button
                        onClick={handleSubmit}
                        className='p-2 bg-cyan-300 rounded-xl hover:scale-125 active:scale-110'
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
                <div className='flex flex-col gap-4 mt-4 m-2'>
                    {
                        formState.username.length > 3 ? <p className='flex bg-green-500 text-white font-semibold p-2 px-2 
                        w-48 rounded-xl duration-500'> Username is valid <span className='justify-center my-auto mx-4'> <FaCheck /> </span> </p>:(
                        <p className='flex text-white bg-red-500 font-semibold p-2 px-2 w-48 rounded-xl duration-500'>Username is invalid <span className='justify-center my-auto mx-2'> <FaTimes /> </span> </p>)
                    }
                    {
                        formState.email.includes(".com") ? <p className='flex bg-green-500 text-white font-semibold p-2 px-2 w-48 rounded-xl duration-500'>Email is valid <span className='justify-center my-auto mx-4'> <FaCheck /> </span> </p>: (
                            <p className='flex text-white bg-red-500 font-semibold p-2 px-2 w-48 rounded-xl duration-500'>Email is invalid <span className='justify-center my-auto mx-2'> <FaTimes /> </span> </p>)
                    }
                    {
                        formState.password.length > 8 && formState.password.length < 20 ? <p className='flex bg-green-500 text-white font-semibold p-2 px-2 w-48 rounded-xl duration-500'>Password is valid <span className='justify-center my-auto mx-4'> <FaCheck /> </span> </p>: (
                            <p className='flex text-white bg-red-500 font-semibold p-2 px-2 w-48 rounded-xl duration-500'>Password is invalid <span className='justify-center my-auto mx-2'> <FaTimes /> </span> </p>)
                    }
                </div>
                <Zod2 onFormState={formState} onHandleChange={handleChange} onHandleSubmit={handleSubmit} userSchema={userSchema} />
            </div>
        );
    };

    return myForm();
};

export default Zod;