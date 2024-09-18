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
      <ReusableHome Heading='Flutter' Paragraph="In the rapidly evolving world of app development, Flutter has emerged as a game-changer. As a leading hybrid app development company, we have embraced Flutter's capabilities and harnessed its potential to deliver cutting-edge mobile app solutions. Our team of experienced developers has mastered the art of Flutter, enabling us to create high-performing and visually stunning hybrid apps across industries and niches." ButtonContent='Contact Us' navigate = "/contactUs" />
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
