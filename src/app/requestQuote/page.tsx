import ContactForm from '@/components/ContactForm';
import SocailBlogs from '../../components/BlogsComponent/SocialBlogs'
import ReusableHome from '../../utils/ReusableHome';
import Technologies from '../../components/Technologies'
import Question from '@/components/ContactComponent/Question';
import RequestForm from '@/components/requestComponent/RequestForm';
export default function requestQuote() {
    return (
      <main >
        <ReusableHome Heading='REQUEST A QUOTE' Paragraph='We ensure we get back to you within 24 hours, with an estimate ready to be evaluated by you.' ButtonContent='' />
        <Technologies/>
        <RequestForm/>
        <Question/>
        {/* <SocailBlogs/> */}
        {/* <ContactForm/> */}
      </main>
    );
  }
  