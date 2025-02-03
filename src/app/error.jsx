'use client'
import React from 'react'
import { useEffect } from 'react'

export default function error({error, reset}) {
    useEffect(() => {
        console.log(error);
        reset()
    }, [error])
  return (
    <div className='text-center mt-10'>
        <h1>Somthing went wrong. please try again later.</h1>
        <button className='hover:text-amber-600' onClick={() => reset()}>Try Again</button>
    </div>
  )
}
