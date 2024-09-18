import Testimonial from "@/components/Testimonial";
import ReusableHome from "@/utils/ReusableHome";
import Technologies from '../../components/Technologies'
import FeaturedBlogs from "@/components/FeaturedBlog";
import ContactForm from "@/components/ContactForm";
import ContactProjects from "@/components/ContactComponent/ContactProjects";
export default function page() {
    return (
      <main >
        <ReusableHome Heading ={'OUR WORK'} Paragraph="Our clients, partners, and everlasting business relations has brought us where we are today, it’s all thanks to them, and our team." ButtonContent="Discuss Your Project" />
        <ContactProjects/>
        <Testimonial/>
        <Technologies />
        <FeaturedBlogs/>
        <ContactForm/>

      </main>
    );
  }
  