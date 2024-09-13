import React from 'react'
import Technologies from "../../components/Technologies"
import WhyWeLoveItHere from '@/components/CareerComponent/WhyWeLove'
import Benifits from '@/components/CareerComponent/Benifits'
import ConsultWithTeam from '@/components/CareerComponent/ConsultWithTeam'
import ContactForm from '@/components/ContactForm'
import TeamSpotlight from '@/components/CareerComponent/TeamSpotlight'
import ReusableHome from '@/utils/ReusableHome'
const career = () => {
  return (
    <>

    <ReusableHome Heading='CAREER' Paragraph='Be a part of one of the fastest growing company. in Pakistan, we encourage learning of new technologies and nurture new talents with utmost care.' ButtonContent='Join Us'  />

      
<Technologies/>
<TeamSpotlight/>
<ConsultWithTeam/>
<Benifits/>

<WhyWeLoveItHere/>
<ContactForm/>
    </>
  )
}

export default career
