import { useSignUp } from '@clerk/nextjs'
import React, { useState } from 'react'

const Register = () => {

  const { isLoaded, signUp, setActive } = useSignUp()
  const [phone,setPhone] = useState('')
  const [error,setError] = useState("");

  if(!isLoaded) {
    return <div className='flex justify-center items-center h-screen'>
      Loading....
    </div>
  }

  const handlleSubmit = async (e : React.FormEvent) => {
    e.preventDefault()

    try {

      await signUp.create({})
      
    } catch (error : any) {
      console.warn("Soemthing went wrong!")
      setError(error)
    }
  }

  return (
    <div>

    </div>
  )
}

export default Register
