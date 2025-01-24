import React from 'react';
import HeadSection from './Components/HeadSection';
import usePlans from '../../Hooks/usePlans';
const plansData = [
    {
        name: 'Basic Plan',
        description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
        prices: {
            monthly: 9.99,
            yearly: 119.99,
        },
    },
    {
        name: 'Standard Plan',
        description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        prices: {
            monthly: 12.99,
            yearly: 112.99,
        },
    },
    {
        name: 'Premium Plan',
        description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
        prices: {
            monthly: 14.99,
            yearly: 114.99,
        },
    }
];
const PlanItem = ({ planData }) => {
    const { planSelected } = usePlans();
    const { name, description, prices } = planData;
    return (
        <div className='plane-item bg-black-color-10 border border-black-color-15 rounded-md p-5 space-y-3'>
            <h3>{name}</h3>
            <p className='text-grey-color-60'>{description}</p>
            <div className='price'><strong className='text-2xl'>${prices[planSelected]} </strong><sub className='text-grey-color-60'>/{planSelected === 'monthly' ? 'monthly' : 'Yearly'}</sub></div>
            <div className='flex items-center gap-2'>
                <button
                    type='button'
                    className='bg-black-color-8 border border-black-color-12 py-2 px-4 rounded-md font-medium sm:hover:bg-black-color-12 transition'
                >
                    Start Free Trial
                </button>
                <button
                    type='button'
                    className='bg-red-color-45 py-2 px-4 rounded-md font-medium sm:hover:bg-white sm:hover:text-red-color-45 transition'
                >
                    Choose Plan
                </button>
            </div>
        </div>
    )
}
const PlanSelectors = () => {
    const { planSelected, setPlane } = usePlans();
    const sharedStyles = `py-2 px-4 rounded-md transition`;
    return (
        <div className='plan-selector p-2 rounded-md bg-black-color-6 border border-black-color-15 space-x-2 max-md:w-fit'>
            {/* Monthly */}
            <button
                type='button'
                title='Monthly'
                aria-label='Monthly'
                onClick={e => setPlane('monthly')}
                className={`${sharedStyles} ${planSelected === 'monthly' ? 'bg-black-color-12' : 'sm:hover:bg-black-color-12'}`}
            >
                Monthly
            </button>
            {/* Yearly */}
            <button
                type='button'
                title='Yearly'
                aria-label='Yearly'
                onClick={e => setPlane('yearly')}
                className={`${sharedStyles} ${planSelected === 'yearly' ? 'bg-black-color-12' : 'sm:hover:bg-black-color-12'}`}
            >
                Yearly
            </button>
        </div>
    )
};

function Plans() {
    return (
        <section className='plans' id='plans'>
            <div className='container space-y-7 py-7'>
                {/* Head Section */}
                <HeadSection
                    textData={{
                        title: `Choose the plan that's right for you`,
                        description: `Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!`,
                    }}
                >
                    <PlanSelectors />
                </HeadSection>
                {/* Plans Grid */}
                <div className='plan-grid grid md:grid-cols-3 gap-5'>
                    {
                        plansData.map((plan, index) => <PlanItem key={index} planData={plan} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Plans;