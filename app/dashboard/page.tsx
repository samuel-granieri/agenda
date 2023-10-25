'use client'
import React, {useEffect, useLayoutEffect} from 'react'
import UserInfo from '@/components/UserInfo'
import { sessionStatus } from '@/utils/session'
import { useRouter } from 'next/navigation'


export default function Dashboard() {

  const router = useRouter();

  useLayoutEffect(()=>{
    const session = sessionStatus
    if(!session){
      router.push('/')
    }
  },[])


  return (
    <div>
      <UserInfo/>
    </div>
      
    
  )
}
