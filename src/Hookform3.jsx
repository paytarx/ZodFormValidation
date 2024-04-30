import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const Hookform3 = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (data) => {
    fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    console.log(data);
  };

  

    

  return (
    <div className="border-2 border-black p-8 mb-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, idx) => (
          <div key={field.id}>
            
            <div className="flex">
            <div className="flex flex-col justify-center text-center">
            <label className="font-bold text-center mr-20">Name</label>
            <div>
            <input
              className="border-2 border-cyan-300 rounded-xl p-2 m-2"
              {...register(`items[${idx}].name`)}/>
              <button
              className="p-2 bg-red-600 text-white rounded-xl mx-2"
              type="button"
              onClick={() => remove(idx)}
            >
              Delete
            </button>
            </div>
            </div>
            </div>
            <div className="flex">
            <div className="flex flex-col justify-center text-center">
            <label className="font-bold text-center mr-20">Age</label>
            <div>
            <input
              className="border-2 border-cyan-300 rounded-xl p-2 m-2"
              {...register(`items[${idx}].age` , {required: true, min: 18} ) }/>
              <button
              className="p-2 bg-red-600 text-white rounded-xl mx-2"
              type="button"
              onClick={() => remove(idx)}
            >
              Delete
            </button>
            </div>
            </div>
            </div>
            <div className="flex">
            <div className="flex flex-col justify-center text-center">
              <label className="font-bold text-center mr-20">Email</label>
            <div>
            <input
            className="border-2 border-cyan-300 rounded-xl p-2 m-2"
            {...register(`items[${idx}].email`)}
            />
            <button
              className="p-2 bg-red-600 text-white rounded-xl mx-2"
              type="button"
              onClick={() => remove(idx)}
            >
              Delete
            </button>
            </div>
            </div>
            </div>
            <div className="flex">
            <div className="flex flex-col justify-center text-center">
              <label className="font-bold text-center mr-20">Phone</label>
            <div>
            <input
            className="border-2 border-cyan-300 rounded-xl p-2 m-2"
            {...register(`items[${idx}].phone`)}
            />
            <button
              className="p-2 bg-red-600 text-white rounded-xl mx-2"
              type="button"
              onClick={() => remove(idx)}
            >
              Delete
            </button>
            </div>
            </div>
            </div>
            <div className="flex">
            <div className="flex flex-col justify-center text-center">
              <label className="font-bold text-center mr-20">Address</label>
            <div>
            <input
            className="border-2 border-cyan-300 rounded-xl p-2 m-2"
            {...register(`items[${idx}].address`)}
            />
            <button
              className="p-2 bg-red-600 text-white rounded-xl mx-2"
              type="button"
              onClick={() => remove(idx)}
            >
              Delete
            </button>
            </div>
            </div>
            </div>
            <div className="flex">
            <div className="flex flex-col justify-center text-center">
              <label className="font-bold text-center mr-20">City</label>
            <div>
            <input
            className="border-2 border-cyan-300 rounded-xl p-2 m-2"
            {...register(`items[${idx}].city`)}
            />
            <button
              className="p-2 bg-red-600 text-white rounded-xl mx-2"
              type="button"
              onClick={() => remove(idx)}
            >
              Delete
            </button>
            </div>
            </div>
            </div>
            <div className="flex">
            <div className="flex flex-col justify-center text-center">
              <label className="font-bold text-center mr-20">State</label>
            <div>
            <input
            className="border-2 border-cyan-300 rounded-xl p-2 m-2"
            {...register(`items[${idx}].state`)}
            />
            <button
              className="p-2 bg-red-600 text-white rounded-xl mx-2"
              type="button"
              onClick={() => remove(idx)}
            >
              Delete
            </button>
            </div>
            </div>
            </div>
          </div>
        ))}
        <div className="flex my-2">
          <button
            className="p-2 bg-cyan-300 rounded-xl mx-2"
            type="button"
            onClick={() => append({ name: "" })}
          >
            Add item
          </button>
          <button className="p-2 bg-cyan-300 rounded-xl mx-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hookform3;
