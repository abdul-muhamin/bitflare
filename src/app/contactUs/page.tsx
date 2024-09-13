import ReusableHome from "@/utils/ReusableHome";
import Technologies from '../../components/Technologies'
import Question from "@/components/ContactComponent/Question";
import ContactForm from "@/components/ContactForm";
export default function contactUs() {
    return (
      <main >
        <ReusableHome Heading="GET IN TOUCH WITH US" Paragraph="Let’s add on to the list, We are here to help you. let’s see how you could improve your business and operations, using technology solutions." ButtonContent="Book a meeting" />
        <Technologies/>
        <ContactForm/>
        <Question/>
      </main>
    );
  }
  