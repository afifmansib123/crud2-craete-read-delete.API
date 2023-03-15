import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [name, namefunc] = useState('')
  const [age, agefunc] = useState('')

  const handlesubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('/api/create',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({name,age})
    })

    if(response.ok){
      console.log('success')
    }else{
      console.log('error')
    }
  } 
  return (
    <form onSubmit={handlesubmit}>

      <label> Name
        <input type = "text" name = "name" value = {name} onChange={(event) => namefunc(event.target.value)}></input>
      </label>

      <label> Age
        <input type = "number" name = "age" value = {age} onChange={(event) => agefunc(event.target.value)}></input>
      </label>

      <button type="submit">create</button>

    </form>
  )
}
