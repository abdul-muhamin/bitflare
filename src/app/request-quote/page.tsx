import ContactForm from '@/components/ContactForm';
import SocailBlogs from '../../components/BlogsComponent/SocialBlogs'
import ReusableHome from '../../utils/ReusableHome';
import Technologies from '../../components/Technologies'
import Question from '@/components/ContactComponent/Question';
import RequestForm from '@/components/requestComponent/RequestForm';
export default function requestQuote() {
    return (
      <main >

        <section className="relative flex mt-24 items-left justify-left bg-background-about bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3f3d56] to-transparent"></div>

        {/* Content */}
        <div className="text-left items-left relative z-10 px-32 py-20">
          <h1 className="text-5xl font-bold text-white mb-4">REQUEST A QUOTE'</h1>
          <p className="text-xl/10 text-white mb-8 max-w-lg">
          We ensure we get back to you within 24 hours, with an estimate ready to be evaluated by you.
          </p>
          
        </div>
      </section>




        <div className='relative bottom-16'>

        <Technologies/>
        </div>
        <RequestForm/>
        <Question/>
        {/* <SocailBlogs/> */}
        {/* <ContactForm/> */}
      </main>
    );
  }
  