import ContactForm from '@/components/ContactForm';
import SocailBlogs from '../../components/BlogsComponent/SocialBlogs'
import ReusableHome from '@/utils/ReusableHome';
import { getCalendlyUrl } from '@/utils/calendlyUrl';
export default function blogs() {
const calendly = getCalendlyUrl()
    return (
      <main >
        <ReusableHome Heading='OUR BLOGS' Paragraph='Bringing new ideas to life, for the readers to reinvent what they knew. We believe in creating new perspective for the users, to see technologies as a part of life.' ButtonContent='Discuss Your Project
' navigate={calendly} />
        <SocailBlogs/>
        <ContactForm/>
      </main>
    );
  }
  