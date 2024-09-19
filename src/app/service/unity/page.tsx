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
      <ReusableHome Heading='Unity' Paragraph="Unity, the industry-leading game development platform, forms the backbone of our game development services. With our expertise in Unity, we create immersive and engaging gaming experiences that captivate players across platforms." ButtonContent='Contact Us' navigate='/contact-us'/>
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
