import React from 'react'
import FAQ from '@/components/about/FAQ'
import Header from '@/components/about/Header'
import Mission from '@/components/about/Mission'
import Vision from '@/components/about/Vision'
import Enquiry from '@/components/about/Enquiry'

const page = () => {
  return (
    <div>
      <Header/>
      <Mission />
      <Vision/>
      <Enquiry/>
    </div>
  )
}

export default page
