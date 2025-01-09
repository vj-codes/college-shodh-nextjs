// import React from 'react'
// import FAQ from '@/components/about/FAQ'
import Header from '@/components/about/Header'
import Mission from '@/components/about/Mission'
import Vision from '@/components/about/Vision'
import Enquiry from '@/components/about/Enquiry'
import Seo from '@/components/SEO'
import { seoData } from '@/data/SeoData'
const page = () => {
  // console.log("seoData.about", seoData.about)
  return (
    <div>
      <Seo page={"about"} customData={seoData.about} />
      <Header />
      <Mission />
      <Vision />
      <Enquiry />
    </div>
  )
}

export default page
