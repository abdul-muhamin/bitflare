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
      <ReusableHome Heading='AWS' Paragraph='When it comes to harnessing the potential of cloud services, AWS stands tall as a game-changer. At our company, we have deep-rooted expertise in leveraging the cutting-edge technologies offered by Amazon Web Services (AWS). Our skilled team of developers has a wealth of experience in harnessing the power of AWS to build robust and scalable solutions across indus' ButtonContent='Contact Us' navigate = "/contactUs" />
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
