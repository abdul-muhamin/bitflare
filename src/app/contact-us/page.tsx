import ReusableHome from "@/utils/ReusableHome";
import Technologies from '../../components/Technologies'
import Question from "@/components/ContactComponent/Question";
import ContactForm from "@/components/ContactForm";
import { getCalendlyUrl } from "@/utils/calendlyUrl";
export default function page() {
  const calendly = getCalendlyUrl()
    return (
      <main >
        <ReusableHome Heading="GET IN TOUCH WITH US" Paragraph="Let’s add on to the list, We are here to help you. let’s see how you could improve your business and operations, using technology solutions." ButtonContent="Book a meeting" navigate={calendly} />
        <div className="relative bottom-16">
        <Technologies/>
        </div>
        <ContactForm/>
        <Question/>
      </main>
    );
  }
  