import React from 'react';
import HeadSection from './Components/HeadSection';
const faqsData = [
    {
        id: 1,
        question: 'What is StreamVibe?',
        answer: 'StreamVibe is a streaming platform that allows you to watch movies, TV shows, and original content from various genres on multiple devices.',
    },
    {
        id: 2,
        question: 'How much does StreamVibe cost?',
        answer: 'StreamVibe offers a range of subscription plans starting from $9.99 per month. Additional details can be found on our pricing page.',
    },
    {
        id: 3,
        question: 'What content is available on StreamVibe?',
        answer: 'StreamVibe features a wide variety of content including movies, TV shows, documentaries, kids’ programs, and exclusive originals.',
    },
    {
        id: 4,
        question: 'How can I watch StreamVibe?',
        answer: 'You can watch StreamVibe by downloading our app on your smartphone, tablet, or smart TV, or by accessing it through your web browser.',
    },
    {
        id: 5,
        question: 'How do I sign up for StreamVibe?',
        answer: 'Signing up is easy! Just visit our website, click on "Sign Up," and follow the instructions to create an account and choose a subscription plan.',
    },
    {
        id: 6,
        question: 'What is the StreamVibe free trial?',
        answer: 'StreamVibe offers a 7-day free trial for new users. During this period, you can explore all features and content without any charges.',
    },
    {
        id: 7,
        question: 'How do I contact StreamVibe customer support?',
        answer: 'You can contact our customer support team via email at support@streamvibe.com or through the "Help" section in our app or website.',
    },
    {
        id: 8,
        question: 'What are the StreamVibe payment methods?',
        answer: 'We accept various payment methods including credit and debit cards, PayPal, and digital wallets. For more details, visit the payment section in your account.',
    }
];
const FaqItem = ({ faqData }) => {
    const { id, question, answer } = faqData;
    const [open, setOpen] = React.useState(false);
    return (
        <div className='faq-item'>
            <label className='cursor-pointer flex items-start gap-3 select-none py-5 border-b border-b-red-color-45/20'>
                <input id={id} type='checkbox' className='hidden peer' onChange={(e) => setOpen(e.target.checked)} />
                {/* Faq Num */}
                <div className='faq-num w-10 h-10 leading-10 text-center bg-black-color-12 border border-black-color-15 rounded-md'>{id}</div>
                {/* Content Wrapper */}
                <div className='flex-1'>
                    <div className='flex items-center justify-between mb-3'>
                        {/* Question */}
                        <h3>{question}</h3>
                        {/* State Icon */}
                        <i className={`fa-solid fa-${open ? 'minus' : 'plus'} fa-fw`}></i>
                    </div>
                    {open && (<p className='text-grey-color-60'>{answer}</p>)}
                </div>
            </label>
        </div>
    )
};
const AskQuestionsButton = () => {
    return (
        <button
            type='button'
            className='bg-red-color-45 py-2 px-4 rounded-md font-medium sm:hover:bg-white sm:hover:text-red-color-45 transition'
        >
            Ask a Question
        </button>
    )
};

function Faqs() {
    return (
        <section className='faqs' id='faqs'>
            <div className='container space-y-7 py-7'>
                {/* Head Section */}
                <HeadSection
                    textData={{
                        title: `Frequently Asked Questions`,
                        description: `Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.`,
                    }}
                >
                    <AskQuestionsButton />
                </HeadSection>
                {/* Faqs Grid */}
                <div className='faqs-grid grid md:grid-cols-2 gap-5'>
                    {faqsData.map((faq, index) => (
                        <FaqItem key={index} faqData={faq} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faqs;