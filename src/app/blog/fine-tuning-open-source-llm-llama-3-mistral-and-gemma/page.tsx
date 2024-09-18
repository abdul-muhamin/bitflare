import ConsultWithTeam from '@/components/CareerComponent/ConsultWithTeam';
import ContactForm from '@/components/ContactForm';
import FeaturedBlogs from '@/components/FeaturedBlog';
import Image from 'next/image';

const BlogPost: React.FC = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        Fine Tuning Open Source LLMs like Llama 3.1, Mistral and Gemma - The Right Way!
        </h1>
      </div>

      {/* Image and Details Section */}
       <div className='m-auto w-[50%] h-52 my-20'>
        <img src="/images/blog1.png" alt="" className='object-cover text-center w-full h-full' />
       </div>

      {/* Content Section */}
      <div className="text-black leading-relaxed space-y-4 font-normal text-xl">
        <p>
          ChatGPT launched in November 2022, and at that moment, no one, not even Sam Altman, knew it would blow up. Generative models were already in the market. GPT-2 launched in Feb 2019. Robert Miles from Computerphile was talking about Transformers and Language models back in 2019. So what happened? What caused this massive wave of AI?
        </p>
        <p className='py-2 px-8'>
          Word of mouth did it: the "killer app".
        </p>
        <p>
        ChatGPT was just the killer app that everyone was waiting for. Apparently, it was a mere chatbot, but it was simple enough that everyone and their Grandma signed up and was getting amazed at the things they could do with it. And everyone shared the screenshots of their chats everywhere on social media. It was free marketing and word of mouth made ChatGPT popular within days.

Soon after, we saw a surge of AI ideas and startups emerging. We know this because the very next month, in December, we were reached out by a customer who wanted to build an AI product to help improve productivity while writing emails. The idea was simple, yet very useful for anyone who write a lot of emails, and the customer had a good marketing strategy in mind, so the idea took off, and within the first month of launch, they received over 2k users to their SaaS product.

Now that was just the beginning. Soon after, we started hearing the demand for AI from every other customer. Some trying to solve a genuine problem, and some just trying to ride the AI wave. Part of our job was to advice them, whether their idea was worth investing in or not. Some heard and some didn't. So some became very successful and the products we built for them generated hundreds of thousands of dollars in revenue, while some struggled to find Product Market Fit.
        </p>
        <p>Fast forward 18 months, AI has advanced a lot, we now have image generation, video generation, creative artwork, songs, and even tools like Photoshop and Figma have integrated AI into their apps, making the lives of designers easy (or some would say redundant, but I'd disagree). All the major tech players have integrated AI into their whole suite of products already and on their way, killed a lot of AI startups as well. And if it wasn't enough already, Apple integrated AI into its complete ecosystem.</p>
        <p className='py-2 px-8'>
        At this stage, if you tell someone that our product is "AI-powered", they won't be surprised anymore. They'll be surprised if you tell them your product is "not AI-powered"
        </p>
        <p>Is that a good thing or bad? I'd say it's a market correction. AI was always meant to be the future. Every product needs to have it as a baseline feature. If a product doesn't have AI, it's going to be considered legacy. But gone are the days when you could only market yourself as an AI startup. Sure, you are one. But so is everyone else.

What problem are you solving exactly? With or without AI?

Whenever something new happens in tech, a wave of innovators emerge, who try to build the next big thing. Some fail and some succeed. But the ones who solve the actual problems of the people are the ones who survive all kinds of market conditions. We have seen some popular AI startups going down right in front of us. You have seen Humane AI Pin, Rabbit R1, both products failed to deliver what they promised and failed to convince users that they could solve any particular problem.

We have seen some big tech companies revert their half-baked AI features (Google Image Gen, Microsoft Recall, Figma AI) because the pressure to release something "AI-related" was too much.

So the next time you are looking for an idea to invest in or to build something yourself, see if it solves someone's actual pain point. Or is it a gimmick that people will show off to their friends for some days and then forget?</p>
      </div>
    </div>
    <ConsultWithTeam/>
    <FeaturedBlogs/>
    <ContactForm/>
    </>
  );
};

export default BlogPost;
