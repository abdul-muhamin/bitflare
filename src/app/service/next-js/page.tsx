import React from 'react'
import ReusableHome from '@/utils/ReusableHome'
import Technologies from "../../../components/Technologies"
import ReasonToConsider from '@/components/ReasonToConsider'
import ConsultWithTeam from "@/components/CareerComponent/ConsultWithTeam"
import IndustriesWeServe from '@/components/IndustriesWeServe'
import FeaturedBlogs from '@/components/FeaturedBlog'
import ContactForm from '@/components/ContactForm'
import ServicesProject from "@/components/servicesProject"
const page = () => {
  return (
    <div>
      <ReusableHome Heading='Next.Js' Paragraph="Next.js, the cutting-edge framework, has revolutionized web development, and we have utilized its power to its fullest extent. Our team of top Next.js developers has been at the forefront of this technology since its inception" ButtonContent='Contact Us' navigate = "/contact-us" />
      <div className='relative bottom-16'>
        <Technologies/>
      </div>
      <ServicesProject/>
      <ReasonToConsider/>
      <ConsultWithTeam/>
      <IndustriesWeServe/>
      <FeaturedBlogs/>
      <ContactForm/>
    </div>
  )
}

export default page
