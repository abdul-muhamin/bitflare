import ContactForm from '@/components/ContactForm';
import SocailBlogs from '../../components/BlogsComponent/SocialBlogs'
import ReusableHome from '@/utils/ReusableHome';
export default function blogs() {
    return (
      <main >
        <ReusableHome Heading='OUR BLOGS' Paragraph='Bringing new ideas to life, for the readers to reinvent what they knew. We believe in creating new perspective for the users, to see technologies as a part of life.' ButtonContent='Discuss Your Project
' />
        <SocailBlogs/>
        <ContactForm/>
      </main>
    );
  }
  