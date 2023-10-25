'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginForm() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    router.push('/dashboard')
    
  }


  return (
    <div className='flex flex-col item-center justify-center h-screen p-6 xl:mx-[35%] lg:mx-[30%] md:mx-[15%] sm:mx-[5%] mx-5% sm:text-sm text-sm'>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold my-4'>Login</h1>

            <form className='flex flex-col gap-3' onSubmit={e=>handleSubmit(e)}>
                <input type='text' placeholder='Email' className='w-full text-sm' onChange={e => setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' className='w-full text-sm' onChange={e => setPassword(e.target.value)}/>
                <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2 w-full'>Login</button>

                <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>Error Message</div>

                <Link className='text-sm mt-3 text-right' href={'/register'}>Don't have an account? <span className='underline'>Register</span></Link>
            </form>
        </div>
    </div>
  )
}
