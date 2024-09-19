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
      <ReusableHome Heading='Unreal' Paragraph="At RipeSeed, we excel in providing top-notch game development services using the powerful Unreal Engine. Our skilled team of developers has extensive experience harnessing the capabilities of Unreal to create immersive and visually stunning games across various genres." ButtonContent='Contact Us'navigate='/contact-us'/>
      <div className='relative bottom-16' >
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
