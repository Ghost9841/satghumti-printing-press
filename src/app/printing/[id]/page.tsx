'use client'

import { printing_data } from '@/assets/assets'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import TransitionEffect from '@/components/TransitionEffect'

interface PrintingPageProps {
  params: Promise<{ id: string }>
}

interface PrintingPageData {
  id: number
  title: string
  description: string
  image: string | StaticImageData
  completion: string
}

const PrintingPage = ({ params }: PrintingPageProps) => {
  const [data, setData] = useState<PrintingPageData | null>(null)


  const fetchBlogData = async ()=> {
    for (let i = 0; i < printing_data.length; i++) {
     if (Number((await (params)).id)===printing_data[i].id) {
      setData(printing_data[i]);
      console.log(printing_data[i]);
      break;
     }
      
    }
  } 
  useEffect(()=>{
    fetchBlogData();
  },)

  if (!data) return <div>Loading...</div>

  return (

    <div className="container mx-auto px-4 py-8 text-black">
      <TransitionEffect/>
      <div className="max-w-3xl mx-auto">
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
        <h1 className="text-3xl font-bold mt-6 mb-4">{data.title}</h1>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-blue-600">Completion time: {data.completion}</span>
          <a href="tel:+977 984-1877618">

          <Button className='bg-blue-600 text-white hover:border-blue-500 hover:bg-white hover:text-blue-600 shadow-sm hover:border-2'>Order Now</Button>
          </a>
        </div>
        <div className="prose max-w-none">
          <h2 className='text-2xl mb-2 font-semibold'>Service Details</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         
          <h2 className='font-medium text-xl my-4'>Why Choose Us</h2>
          <ol>
            <li className='my-4 font-normal list-inside animate-pulse'>High-quality printing</li>
            <li className='my-4 font-normal list-inside animate-pulse'>Fast turnaround times</li>
            <li className='my-4 font-normal list-inside animate-pulse'>Competitive pricing</li>
            <li className='my-4 font-normal list-inside animate-pulse'>Excellent customer service</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default PrintingPage;