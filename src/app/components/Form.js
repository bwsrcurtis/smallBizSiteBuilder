import React from 'react';

const Form = () => {
  return (
    <>
      <form
        name='contact'
        className='mx-auto w-[32rem]'
        action='/success'
        method='POST'
        data-netlify='true'>
        <input type='hidden' name='contact' value='form'></input>
        <p className='mb-1 text-xl'>Your Name</p>
        <input
          type='text'
          name='Name'
          placeholder='   Jane Smith'
          className='w-full border-solid border-2
          border-background mb-4 text-primary/75 placeholder:text-primary/75'></input>
        <p className='mb-1 text-xl'>Your Email</p>
        <input type='email'
          name='Email'
          placeholder='   jane@example.com'
          className='w-full border-solid border-2
          border-background mb-4 text-primary/75 placeholder:text-primary/75'></input>
        <p className='mb-1 text-xl'>Message</p>
        <input type='textarea' name='Message'
          className='w-full h-48 border-solid border-2
        border-background mb-4 text-primary/75 placeholder:text-primary/75'></input>
        <button type='submit' className='w-full bg-primary h-12 rounded-lg hover:bg-primary/50'>Submit</button>
      </form>
    </>
  );
};

export default Form;
